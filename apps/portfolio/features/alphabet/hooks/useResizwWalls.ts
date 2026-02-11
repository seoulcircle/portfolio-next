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

    return () => clearTimeout(timeout);
  }, [width, height]);
};
