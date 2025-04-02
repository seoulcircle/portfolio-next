"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
import { DraggableProps } from "../types/alphabet.types";

const DraggableChar = ({ char, x, y }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: char, // 드래그 아이템 고유 식별자
  });
  const style: React.CSSProperties = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    fontSize: "100px",
    fontWeight: "bold",
    cursor: "grab",
    pointerEvents: "auto",
    opacity: isDragging ? 0.3 : 1,
    transition: "transform 200ms ease",
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {char}
    </div>
  );
};

export default DraggableChar;
