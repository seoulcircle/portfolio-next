"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import { DndContext, DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { S } from "./AlphabetRain.style";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useWalls } from "../hooks/useWalls";
import { useResizeWalls } from "../hooks/useResizwWalls";
import { useAlphabetMatter } from "../hooks/useAlphabetMatter";
import DropZone from "./DropZone";
import DraggableChar from "./DraggableChar";
import useRecycleChar from "../hooks/useRecycleChar";
import { useDragMonitor } from "../hooks/useDndMonitor";

const AlphabetRain = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());
  const { width, height } = useWindowSize();

  const [selectedChars, setSelectedChars] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { floor, leftWall, rightWall } = useWalls(width, height);
  const wallsRef = useRef({ floor, leftWall, rightWall });

  useDragMonitor(setActiveId);

  useEffect(() => {
    console.log("AlphabetRain mounted");
    return () => console.log("AlphabetRain unmounted");
  }, []);

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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over?.id === "drop-zone") {
      const droppedId = active.id as string;
      const droppedChar = droppedId.split("-")[0];

      setSelectedChars((prev) => [...prev, droppedChar]);

      const target = charBodies.find((c, i) => `${c.char}-${i}` === droppedId);

      if (target) {
        recycleChar(droppedChar, target.body);
      }
    }

    setActiveId(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragEnd={handleDragEnd}
    >
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
            />
          );
        })}
        <DropZone selectedChars={selectedChars} bgColor={dropZoneBgColor} />
      </S.Container>
    </DndContext>
  );
};

export default AlphabetRain;
