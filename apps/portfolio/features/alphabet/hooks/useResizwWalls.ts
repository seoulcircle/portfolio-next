import { useEffect } from "react";
import Matter from "matter-js";
import { ResizeWallsProps } from "../types/alphabet.types";

export const useResizeWalls = ({
  engineRef,
  wallsRef,
  width,
  height,
  charBodies,
}: ResizeWallsProps) => {
  useEffect(() => {
    if (!wallsRef.current) return;

    const engine = engineRef.current;
    engine.enableSleeping = false;

    // 모든 알파벳 바디 깨우기
    charBodies.forEach(({ body }) => {
      Matter.Sleeping.set(body, false);
    });

    const timeout = setTimeout(() => {
      engine.enableSleeping = true;
    }, 500);

    const { floor, leftWall, rightWall } = wallsRef.current;

    const floorWidth = floor.bounds.max.x - floor.bounds.min.x;
    const leftWallHeight = leftWall.bounds.max.y - leftWall.bounds.min.y;
    const rightWallHeight = rightWall.bounds.max.y - rightWall.bounds.min.y;

    Matter.Body.setPosition(floor, { x: width / 2, y: height + 50 });
    Matter.Body.scale(floor, width / floorWidth, 1);

    Matter.Body.setPosition(leftWall, { x: -50, y: height / 2 });
    Matter.Body.scale(leftWall, 1, height / leftWallHeight);

    Matter.Body.setPosition(rightWall, { x: width + 50, y: height / 2 });
    Matter.Body.scale(rightWall, 1, height / rightWallHeight);

    // 화면 밖으로 나간 알파벳들을 화면 안으로 이동
    charBodies.forEach(({ body }) => {
      const radius = body.circleRadius || 52; // 알파벳 반지름
      const padding = 10; // 여유 공간

      let newX = body.position.x;
      let newY = body.position.y;

      // 왼쪽 경계 체크
      if (body.position.x - radius < padding) {
        newX = radius + padding;
      }
      // 오른쪽 경계 체크
      if (body.position.x + radius > width - padding) {
        newX = width - radius - padding;
      }
      // 아래쪽 경계 체크 (화면 아래로 너무 내려간 경우)
      if (body.position.y - radius > height) {
        newY = height - radius - padding;
      }

      // 위치가 변경되었다면 업데이트
      if (newX !== body.position.x || newY !== body.position.y) {
        Matter.Body.setPosition(body, { x: newX, y: newY });
        Matter.Body.setVelocity(body, { x: 0, y: 0 }); // 속도 초기화
      }
    });

    return () => clearTimeout(timeout);
  }, [width, height, charBodies]);
};
