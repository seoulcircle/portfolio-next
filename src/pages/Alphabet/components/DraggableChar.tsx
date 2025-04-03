"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "../types/alphabet.types";

const DraggableChar = ({
  id,
  char,
  x,
  y,
  bgColor,
  textColor,
  isActive,
}: DraggableProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id, // 드래그 아이템 고유 식별자
  });

  const style: React.CSSProperties = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    color: textColor,
    fontSize: "45px",
    boxShadow: `0 0 10px ${bgColor}`,
    cursor: "grab",
    pointerEvents: "auto",
    opacity: isDragging ? 1 : 0.9,
    transition: "transform 200ms ease",
    userSelect: "none",
    zIndex: isActive ? 9999 : 1,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {char}
    </div>
  );
};

export default DraggableChar;
