"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../types/alphabet.types";
import { useIsMobile } from "@hooks/useMediaQuery";

const DraggableChar = ({
  id,
  char,
  x,
  y,
  bgColor,
  textColor,
}: DraggableProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id, // 드래그 아이템 고유 식별자
  });

  const isMobile = useIsMobile();

  const style: React.CSSProperties = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: isMobile ? "60px" : "90px",
    height: isMobile ? "60px" : "90px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    color: textColor,
    fontSize: isMobile ? "30px" : "45px",
    boxShadow: `0 0 10px ${bgColor}`,
    cursor: "grab",
    pointerEvents: "auto",
    opacity: isDragging ? 1 : 0.9,
    userSelect: "none",
    zIndex: isDragging ? 9999 : 1,
    touchAction: "none", // 터치 기기에서 드래그 시 브라우저 기본 동작 방지
    WebkitTouchCallout: "none", // iOS에서 터치 시 컨텍스트 메뉴 방지
    WebkitUserSelect: "none", // iOS에서 터치 시 선택 방지
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      tabIndex={0}
      role="listitem"
      aria-label={`알파벳 ${char}`}
    >
      {char}
    </div>
  );
};

export default DraggableChar;
