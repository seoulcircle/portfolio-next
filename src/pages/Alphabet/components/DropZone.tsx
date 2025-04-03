import { useDroppable } from "@dnd-kit/core";
import { S } from "./DropZone.styles";
import { DropZoneProps } from "../types/alphabet.types";

const DropZone = ({ selectedChars, bgColor }: DropZoneProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });

  return (
    <S.DropZone
      ref={setNodeRef}
      id="drop-zone"
      $isOver={isOver}
      style={{
        border: isOver ? `1px solid ${bgColor}` : "none",
      }}
    >
      {selectedChars.map((char, i) => (
        <S.DropChar key={`${char}-${i}`}>{char}</S.DropChar>
      ))}
    </S.DropZone>
  );
};

export default DropZone;
