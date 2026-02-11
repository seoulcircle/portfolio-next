// hooks/useWalls.ts
import { Bodies } from "matter-js";

export const useWalls = (width: number, height: number, thickness = 100) => {
  // 벽 물리 속성 (프로덕션 환경 떨림 방지)
  const wallOptions = {
    isStatic: true,
    label: "wall",
    restitution: 0, // 탄성 제거
    friction: 1, // 높은 마찰력
    frictionStatic: 1, // 정지 마찰력
    slop: 0, // 위치 오차 최소화
  };

  const floor = Bodies.rectangle(
    width / 2,
    height + thickness / 2,
    width,
    thickness,
    wallOptions
  );
  const leftWall = Bodies.rectangle(
    -thickness / 2,
    height / 2,
    thickness,
    height,
    wallOptions
  );
  const rightWall = Bodies.rectangle(
    width + thickness / 2,
    height / 2,
    thickness,
    height,
    wallOptions
  );

  return { floor, leftWall, rightWall };
};
