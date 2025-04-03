// hooks/useAlphabetMatter.ts
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { CharBody } from "../types/alphabet.types";
import {
  COLOR_HUES,
  getRandomColorByHue,
  getContrastingTextColor,
  ColorTheme,
} from "../utils/colors";

export const useAlphabetMatter = ({
  engineRef,
  sceneRef,
  width,
  walls,
}: {
  engineRef: React.MutableRefObject<Matter.Engine>;
  sceneRef: React.RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  walls: {
    floor: Matter.Body;
    leftWall: Matter.Body;
    rightWall: Matter.Body;
  };
}) => {
  const [charBodies, setCharBodies] = useState<CharBody[]>([]);
  const runnerRef = useRef<Matter.Runner | null>(null);

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

  useEffect(() => {
    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint, Composite } =
      Matter;
    const engine = engineRef.current;
    engine.enableSleeping = true;
    engine.gravity.y = 10;

    const upper = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(65 + i)
    );
    const spaces = Array.from({ length: 15 }, () => " ");
    const alphabet = [...upper, ...spaces];

    const hue = COLOR_HUES[theme];
    const created: CharBody[] = alphabet.map((char, i) => {
      const bgColor = getRandomColorByHue(hue);
      const textColor = getContrastingTextColor(bgColor);

      const body = Bodies.circle(
        100 + Math.random() * width,
        -100 - i * 50,
        52,
        {
          mass: 10,
          restitution: 0,
          friction: 0.8,
          frictionStatic: 1.0,
          frictionAir: 0.02,
          sleepThreshold: 40,
        }
      );
      return { char, body, bgColor, textColor };
    });

    const mouse = Mouse.create(sceneRef.current!);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2 },
    });

    World.add(engine.world, [
      walls.floor,
      walls.leftWall,
      walls.rightWall,
      ...created.map((c) => c.body),
      mouseConstraint,
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;

    setCharBodies(created);

    let animationFrameId: number;
    const update = () => {
      animationFrameId = requestAnimationFrame(update);
      // shallow copy로 상태 갱신 → 위치 반영 트리거
      setCharBodies((prev) =>
        prev.map(({ char, body, bgColor, textColor }) => ({
          char,
          body,
          bgColor,
          textColor,
        }))
      );
    };
    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Engine.clear(engine);
      World.remove(engine.world, mouseConstraint);
      Composite.clear(engine.world, true);
    };
  }, []);

  return { charBodies, setCharBodies, dropZoneBgColor, theme };
};
