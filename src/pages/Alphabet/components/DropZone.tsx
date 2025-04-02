import { useDroppable } from "@dnd-kit/core";
import { S } from "./DropZone.styles";

interface Props {
  selectedChars: string[];
}

const DropZone = ({ selectedChars }: Props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });

  return (
    <S.DropZone ref={setNodeRef} $isOver={isOver}>
      {selectedChars.map((char, i) => (
        <S.DropChar key={`${char}-${i}`}>{char}</S.DropChar>
      ))}
    </S.DropZone>
  );
};

export default DropZone;
