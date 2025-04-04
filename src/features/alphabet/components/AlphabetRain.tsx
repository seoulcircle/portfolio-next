"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import { useDndMonitor } from "@dnd-kit/core";
import { S } from "@/features/alphabet/styles/AlphabetRain.style";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useWalls } from "@/features/alphabet/hooks/useWalls";
import { useResizeWalls } from "@/features/alphabet/hooks/useResizwWalls";
import { useAlphabetMatter } from "@/features/alphabet/hooks/useAlphabetMatter";
import DropZone from "@/features/alphabet/components/DropZone";
import DraggableChar from "@/features/alphabet/components/DraggableChar";
import useRecycleChar from "@/features/alphabet/hooks/useRecycleChar";

const AlphabetRain = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const { width, height } = useWindowSize();

  const [selectedChars, setSelectedChars] = useState<string[]>([
    "H",
    "E",
    "L",
    "L",
    "O",
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { floor, leftWall, rightWall } = useWalls(width, height);
  const wallsRef = useRef({ floor, leftWall, rightWall });

  const handleDeleteLastChar = () => {
    setSelectedChars((prev) => prev.slice(0, -1));
  };

  const { charBodies, setCharBodies, dropZoneBgColor, theme } =
    useAlphabetMatter({
      engineRef,
      sceneRef,
      width,
      height,
      walls: wallsRef.current,
    });

  useResizeWalls({
    engineRef,
    wallsRef,
    width,
    height,
    charBodies,
  });

  const recycleChar = useRecycleChar({
    engineRef,
    setCharBodies,
    width,
    theme,
  });

  useDndMonitor({
    onDragStart: (event) => setActiveId(event.active.id as string),
    onDragCancel: () => setActiveId(null),
    onDragEnd: (event) => {
      const { over, active } = event;

      if (over?.id === "drop-zone") {
        const droppedId = active.id as string;
        const droppedChar = droppedId.split("-")[0];

        setSelectedChars((prev) => [...prev, droppedChar]);

        const target = charBodies.find(
          (c, i) => `${c.char}-${i}` === droppedId
        );

        if (target) {
          recycleChar(droppedChar, target.body);
        }
      }

      setActiveId(null);
    },
  });

  useEffect(() => {
    return () => {
      const engine = engineRef.current;
      // 기존 엔진 클리어
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      // 엔진 자체 초기화
      engineRef.current = Matter.Engine.create();
    };
  }, []);

  return (
    <>
      <S.Container ref={sceneRef}>
        {charBodies.map(({ char, body, bgColor, textColor }, i) => {
          const id = `${char}-${i}`;
          return (
            <DraggableChar
              key={id}
              id={id}
              char={char}
              x={Math.round(body.position.x - 50)}
              y={Math.round(body.position.y - 50)}
              bgColor={bgColor}
              textColor={textColor}
              isActive={activeId === id}
              isVisible={activeId !== id}
            />
          );
        })}
      </S.Container>
      <S.Overlay>
        <DropZone
          selectedChars={selectedChars}
          bgColor={dropZoneBgColor}
          onDelete={handleDeleteLastChar}
        />
      </S.Overlay>
    </>
  );
};

export default AlphabetRain;
