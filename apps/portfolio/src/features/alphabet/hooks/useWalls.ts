// hooks/useWalls.ts
import { Bodies } from "matter-js";

export const useWalls = (width: number, height: number, thickness = 100) => {
  const floor = Bodies.rectangle(
    width / 2,
    height + thickness / 2,
    width,
    thickness,
    {
      isStatic: true,
      label: "wall",
    }
  );
  const leftWall = Bodies.rectangle(
    -thickness / 2,
    height / 2,
    thickness,
    height,
    {
      isStatic: true,
      label: "wall",
    }
  );
  const rightWall = Bodies.rectangle(
    width + thickness / 2,
    height / 2,
    thickness,
    height,
    {
      isStatic: true,
      label: "wall",
    }
  );

  return { floor, leftWall, rightWall };
};
