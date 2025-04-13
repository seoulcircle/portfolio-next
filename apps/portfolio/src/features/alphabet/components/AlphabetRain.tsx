"use client";

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import { useDndMonitor } from "@dnd-kit/core";
import { S } from "../styles/AlphabetRain.style";
import { useWindowSize } from "../../../../../../.vscode/packages/hooks/useWindowSize";
import { useWalls } from "../hooks/useWalls";
import { useResizeWalls } from "../hooks/useResizwWalls";
import { useAlphabetMatter } from "../hooks/useAlphabetMatter";
import DropZone from "./DropZone";
import DraggableChar from "./DraggableChar";
import useRecycleChar from "../hooks/useRecycleChar";

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
  const [dragVisualPosition, setDragVisualPosition] = useState<{
    x: number;
    y: number;
  } | null>(null); // 드래그중인 요소의 시각적 위치

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

  useEffect(() => {
    if (!activeId) return;

    // 드래그 중 마우스 위치 업데이트
    const handleMouseMove = (e: MouseEvent) => {
      setDragVisualPosition({ x: e.clientX, y: e.clientY });
    };

    // 모바일 터치 이벤트 핸들러
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        setDragVisualPosition({ x: touch.clientX, y: touch.clientY });

        // 스크롤 방지
        e.preventDefault();
      }
    };

    // 마우스와 터치 이벤트 모두 등록
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeId]);

  useDndMonitor({
    onDragStart: (event) => {
      setActiveId(event.active.id as string);
      // 드래그 시작 시 마우스의 x, y위치값으로 시각적 위치 셋팅
      try {
        const activatorEvent = event.activatorEvent as MouseEvent | TouchEvent;

        if (activatorEvent && "clientX" in activatorEvent) {
          // 마우스 이벤트 처리
          setDragVisualPosition({
            x: activatorEvent.clientX,
            y: activatorEvent.clientY,
          });
        } else if (
          activatorEvent &&
          "touches" in activatorEvent &&
          activatorEvent.touches.length > 0
        ) {
          // 모바일 터치 이벤트 처리
          const touch = activatorEvent.touches[0];
          setDragVisualPosition({
            x: touch.clientX,
            y: touch.clientY,
          });
        }
      } catch (error) {
        console.error("드래그 시작 이벤트 처리 오류:", error);
      }
    },
    onDragCancel: () => {
      // 드래그 중단 시 모두 초기화
      setActiveId(null);
      setDragVisualPosition(null);
    },
    onDragEnd: (event) => {
      const { over, active } = event;
      const droppedId = active.id as string;

      if (over?.id === "drop-zone") {
        const droppedChar = droppedId.split("-")[0];
        setSelectedChars((prev) => [...prev, droppedChar]);

        const target = charBodies.find(
          (c, i) => `${c.char}-${i}` === droppedId
        );
        // 드랍존에 올라가면 리사이클 되도록
        if (target) {
          recycleChar(droppedChar, target.body);
        }
      } else if (dragVisualPosition) {
        // 드래그 아이템의 시각적 위치 matter 위치로 업데이트
        const draggedBody = charBodies.find(
          (c, i) => `${c.char}-${i}` === droppedId
        )?.body;

        if (draggedBody) {
          // 물리 위치를 시각 위치로 덮어씀
          Matter.Body.setPosition(draggedBody, {
            x: dragVisualPosition.x,
            y: dragVisualPosition.y,
          });
          Matter.Body.setVelocity(draggedBody, { x: 0, y: 0 }); // 속도 초기화
        }
      }

      setActiveId(null);
      setDragVisualPosition(null);
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

  return (
    <>
      <S.Container ref={sceneRef}>
        {charBodies.map(({ char, body, bgColor, textColor }, i) => {
          const id = `${char}-${i}`;
          const isDragging = activeId === id;

          // 드래그 ? 마우스 위치 기반 위치 : 알파벳 물리 위치
          const position =
            isDragging && dragVisualPosition
              ? {
                  x: dragVisualPosition.x - 45,
                  y: dragVisualPosition.y - 45,
                }
              : {
                  x: Math.round(body.position.x - 50),
                  y: Math.round(body.position.y - 50),
                };

          return (
            <DraggableChar
              key={id}
              id={id}
              char={char}
              x={position.x}
              y={position.y}
              bgColor={bgColor}
              textColor={textColor}
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
