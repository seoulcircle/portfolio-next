"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import { DndContext, DragOverlay, useDndMonitor } from "@dnd-kit/core";
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

  const { charBodies, setCharBodies, dropZoneBgColor, theme } =
    useAlphabetMatter({
      engineRef,
      sceneRef,
      width,
      height,
      walls: wallsRef.current,
    });
  const handleDeleteLastChar = () => {
    setSelectedChars((prev) => prev.slice(0, -1));
  };

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
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      engineRef.current = Matter.Engine.create();
    };
  }, []);

  const getActiveChar = () => {
    if (!activeId) return null;
    const [char] = activeId.split("-");
    const target = charBodies.find((c, i) => `${c.char}-${i}` === activeId);
    if (!target) return null;

    return {
      id: activeId,
      char,
      bgColor: target.bgColor,
      textColor: target.textColor,
    };
  };

  return (
    <DndContext
      onDragStart={(event) => setActiveId(event.active.id as string)}
      onDragEnd={(event) => {
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
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <S.Container ref={sceneRef}>
        {charBodies.map(({ char, body, bgColor, textColor }, i) => {
          const id = `${char}-${i}`;
          const isDraggingThis = activeId === id;

          return !isDraggingThis ? (
            <DraggableChar
              key={id}
              id={id}
              char={char}
              x={Math.round(body.position.x - 50)}
              y={Math.round(body.position.y - 50)}
              bgColor={bgColor}
              textColor={textColor}
              isActive={false}
            />
          ) : null;
        })}

        <DropZone
          selectedChars={selectedChars}
          bgColor={dropZoneBgColor}
          onDelete={handleDeleteLastChar}
        />
      </S.Container>

      <DragOverlay zIndex={9999}>
        {(() => {
          const data = getActiveChar();
          if (!data) return null;
          return (
            <DraggableChar
              id={data.id}
              char={data.char}
              x={0}
              y={0}
              bgColor={data.bgColor}
              textColor={data.textColor}
              isActive={true}
            />
          );
        })()}
      </DragOverlay>
    </DndContext>
  );
};

export default AlphabetRain;
