// hooks/useAlphabetMatter.ts
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { CharBody } from "../types/alphabet.types";
import { COLOR_HUES, getRandomColorByHue, ColorTheme } from "../utils/colors";
import { UseAlphabetMatterProps } from "../types/alphabet.types";
import { useIsMobile } from "@hooks/useMediaQuery";

export const useAlphabetMatter = ({
  engineRef,
  sceneRef,
  width,
  height,
  walls,
}: UseAlphabetMatterProps) => {
  const [charBodies, setCharBodies] = useState<CharBody[]>([]);
  const runnerRef = useRef<Matter.Runner | null>(null); // 애니메이션 루츠(러너) 추적하기 위한 ref
  const isMobile = useIsMobile();
  const THEMES: ColorTheme[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
  ];
  const [theme] = useState<ColorTheme>(() => {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    return THEMES[randomIndex];
  });
  const [dropZoneBgColor] = useState(() =>
    getRandomColorByHue(COLOR_HUES[theme])
  );

  // 알파벳 설정
  const upper = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const spaces = Array.from({ length: isMobile ? 5 : 10 }, () => " ");
  const alphabet = [...upper, ...spaces];

  // 초기 Matter.js 세팅 및 러너 실행
  useEffect(() => {
    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint, Composite } =
      Matter;
    const engine = engineRef.current;
    engine.enableSleeping = true;
    engine.gravity.y = 10;
    
    // 물리 엔진 안정성 향상
    engine.positionIterations = 10; // 위치 계산 반복 횟수 증가
    engine.velocityIterations = 8; // 속도 계산 반복 횟수 증가

    // 알파벳마다 matter.js 원형 body 생성
    const created: CharBody[] = alphabet.map((char, i) => {
      const hue = COLOR_HUES[theme];
      const bgColor = getRandomColorByHue(hue);

      const body = Bodies.circle(
        isMobile
          ? Math.random() * (width - 120)
          : 60 + Math.random() * (width - 180),

        -50 - i * 20,
        isMobile ? 40 : 52,
        {
          mass: isMobile ? 1 : 10,
          restitution: 0, // 튕김 없음
          friction: 0.9, // 0.8 → 0.9 (마찰력 증가)
          frictionStatic: 1.5, // 1.0 → 1.5 (정지 마찰력 증가)
          frictionAir: 0.1, // 0.08 → 0.1 (공기 저항 더 증가)
          sleepThreshold: 20, // 30 → 20 (더욱 빨리 sleep)
          slop: 0.05, // 위치 오차 허용
        }
      );
      return { char, body, bgColor };
    });

    // 마우스 컨트롤 인터렉션
    const mouse = Mouse.create(sceneRef.current!);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2 },
    });

    // 알파벳, 벽, 마우스 컨트롤 World에 등록
    World.add(engine.world, [
      walls.floor,
      walls.leftWall,
      walls.rightWall,
      ...created.map((c) => c.body),
      mouseConstraint,
    ]);

    // 충돌 감지로 바닥에 닿으면 완전히 정지
    Matter.Events.on(engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
        
        // 벽과 충돌한 body 찾기
        const wall = bodyA.label === "wall" ? bodyA : bodyB.label === "wall" ? bodyB : null;
        const charBody = bodyA.label === "wall" ? bodyB : bodyA;
        
        if (wall && charBody.label !== "wall") {
          // 바닥(floor)과 충돌한 경우만 처리
          if (wall === walls.floor) {
            // 속도가 느리면 완전히 정지
            const speed = Math.sqrt(charBody.velocity.x ** 2 + charBody.velocity.y ** 2);
            if (speed < 1) {
              Matter.Body.setVelocity(charBody, { x: 0, y: 0 });
              Matter.Body.setAngularVelocity(charBody, 0);
              Matter.Sleeping.set(charBody, true); // 강제로 sleep 상태로
            }
          }
        }
      });
    });

    // matter.js 러너 시작 -> 물리 엔진 작동 시작
    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    // 생성된 알파벳들 리액트로 전달
    setCharBodies(created);

    let animationFrameId: number; // 루프 id 저장용 변수
    let isCancelled = false; // 루프 중단 여부 확인용 변수

    // 알파벳 위치 업데이트 함수 (정수 위치 기준)
    const update = () => {
      if (isCancelled) return; // 루프 중단 시 업데이트 중단

      animationFrameId = requestAnimationFrame(update); // 매 프레임마다 애니메이션 호출

      const prevPositions = new Map<string, { x: number; y: number }>(); // 알파벳의 이전 위치 저장용 맵

      setCharBodies((prev) => {
        let hasChanged = false; // false면 렌더링 생략

        const updated = prev.map(
          ({ char, body, bgColor, textColor }, index) => {
            // 미세한 움직임 강제 중지
            const velocity = body.velocity;
            const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
            const angularSpeed = Math.abs(body.angularVelocity);
            
            // 바닥 근처에 있고 속도가 느리면 완전히 freeze
            const nearFloor = body.position.y > height - 100;
            
            if (nearFloor && speed < 0.5 && angularSpeed < 0.01) {
              // 완전히 정지
              Matter.Body.setVelocity(body, { x: 0, y: 0 });
              Matter.Body.setAngularVelocity(body, 0);
              Matter.Sleeping.set(body, true); // sleep 상태로 전환
            } else if (speed < 0.1 && angularSpeed < 0.01) {
              // 일반적인 경우도 속도가 매우 느리면 멈춤
              Matter.Body.setVelocity(body, { x: 0, y: 0 });
              Matter.Body.setAngularVelocity(body, 0);
            }

            const id = `${char}-${index}`;
            const newX = Math.round(body.position.x); // 소수점 반올림한 위치
            const newY = Math.round(body.position.y);
            const prevPos = prevPositions.get(id);

            if (!prevPos || newX !== prevPos.x || newY !== prevPos.y) {
              hasChanged = true;
              prevPositions.set(id, { x: newX, y: newY });
            }

            return { char, body, bgColor, textColor };
          }
        );

        return hasChanged ? updated : prev; // 변화 없으면 상태 유지
      });
    };
    update();

    return () => {
      isCancelled = true; // 루프 중단
      cancelAnimationFrame(animationFrameId); // requestAnimationFrame 취소
      Runner.stop(runner); // 러너 중단
      Engine.clear(engine); // 엔진 초기화
      World.remove(engine.world, mouseConstraint); // 마우스 컨트롤 제거
      Composite.clear(engine.world, true); // 전체 월드 정리
    };
  }, []);

  return { charBodies, setCharBodies, dropZoneBgColor, theme };
};
