import { RecycleCharProps } from "../types/alphabet.types";
import Matter from "matter-js";
import {
  getRandomColorByHue,
  getContrastingTextColor,
  COLOR_HUES,
  ColorTheme,
} from "../utils/colors";

const useRecycleChar = ({
  engineRef,
  setCharBodies,
  width,
  theme,
}: RecycleCharProps & { theme: ColorTheme }) => {
  const recycle = (droppedChar: string, targetBody: Matter.Body) => {
    // 1. 기존 body 제거
    Matter.World.remove(engineRef.current.world, targetBody);

    // 2. 상태에서 제거
    setCharBodies((prev) => prev.filter((c) => c.body !== targetBody));

    // 3. 1초 후 재생성
    setTimeout(() => {
      const hue = COLOR_HUES[theme];
      const bgColor = getRandomColorByHue(hue);
      const textColor = getContrastingTextColor(bgColor);

      const newBody = Matter.Bodies.circle(
        100 + Math.random() * width, // x좌표
        -100, // y좌표
        52, // 반지름
        {
          mass: 10,
          restitution: 0,
          friction: 0.8,
          frictionStatic: 1.0,
          frictionAir: 0.02,
          sleepThreshold: 40,
        }
      );

      Matter.World.add(engineRef.current.world, newBody);
      setCharBodies((prev) => [
        ...prev,
        { char: droppedChar, body: newBody, bgColor, textColor },
      ]);
    }, 1000);
  };

  return recycle;
};

export default useRecycleChar;
