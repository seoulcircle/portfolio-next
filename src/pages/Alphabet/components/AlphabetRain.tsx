"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { S } from "./AlphabetRain.style";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useWalls } from "../hooks/useWalls";
import { useResizeWalls } from "../hooks/useResizwWalls";
import { CharBody } from "../types/alphabet.types";
import DropZone from "./DropZone";
import DraggableChar from "./DraggableChar";

const AlphabetRain = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create()); // 물리 엔진 생성
  const [charBodies, setCharBodies] = useState<CharBody[]>([]);
  const [selectedChars, setSelectedChars] = useState<string[]>([]);
  const { width, height } = useWindowSize();

  const { Engine, World, Bodies, Runner, Mouse, MouseConstraint, Composite } =
    Matter;
  const engine = engineRef.current;
  engine.gravity.y = 10;

  // 벽 생성(floor, leftWall, rightWall)
  const { floor, leftWall, rightWall } = useWalls(width, height);
  const wallsRef = useRef<{
    floor: Matter.Body;
    leftWall: Matter.Body;
    rightWall: Matter.Body;
  } | null>(null);

  // A-Z
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  useEffect(() => {
    engineRef.current.enableSleeping = true;
    // 알파벳 박스 만들기
    const created: CharBody[] = alphabet.map((char, i) => {
      const body = Bodies.rectangle(
        100 + Math.random() * (width - 200), // x좌표
        -100 - i * 50, // y좌표
        90, // 너비
        90, // 높이
        {
          restitution: 0,
          friction: 1.0,
          frictionStatic: 1.0,
          frictionAir: 0.4,
          sleepThreshold: 20,
          density: 0.1,
          chamfer: { radius: 5 },
        }
      );
      return { char, body };
    });

    // 벽 생성
    wallsRef.current = { floor, leftWall, rightWall };

    // 드래그 가능하도록
    const mouse = Mouse.create(sceneRef.current!); // 캔버스 위 마우스 생성
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
      },
    });

    // World에 floor, 알파벳 Body, 드래그 기능 등록
    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ...created.map((c) => c.body),
      mouseConstraint,
    ]);

    const runner = Runner.create(); // 시간을 관리하는 객체
    Runner.run(runner, engine); // 시간을 흐르게 하면서 엔진 실행

    // React에서 상태로 관리
    setCharBodies(created);

    // 프레임마다 다시 렌더링 (React와 Matter 연결)
    const update = () => {
      requestAnimationFrame(update); // update 실행 예약
      // 얕은 복사 강제 리렌더 -> 위치 업데이트 유도 (트리거만)
      setCharBodies((prev) =>
        prev.map(({ char, body }) => ({
          char,
          body,
        }))
      );
    };
    update();

    return () => {
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(engine.world, false);
    };
  }, []);

  // 화면 크기 바뀔 때마다 walls 크기 조정
  useResizeWalls({
    engineRef,
    wallsRef,
    width,
    height,
    charBodies,
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over?.id === "drop-zone") {
      setSelectedChars((prev) => [...prev, active.id as string]);
      setCharBodies((prev) => prev.filter(({ char }) => char !== active.id));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <S.Container ref={sceneRef}>
        {charBodies.map(({ char, body }, i) => (
          <DraggableChar
            key={`${char}-${i}`}
            char={char}
            x={Math.round(body.position.x - 50)}
            y={Math.round(body.position.y - 50)}
          />
        ))}
        <DropZone selectedChars={selectedChars} />
      </S.Container>
    </DndContext>
  );
};

export default AlphabetRain;
