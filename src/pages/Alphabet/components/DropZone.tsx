import { useDroppable } from "@dnd-kit/core";
import { S } from "./DropZone.styles";
import { DropZoneProps } from "../types/alphabet.types";
import { useWordDefinitionMutation } from "../hooks/useWordDefinitionMutation";

const DropZone = ({ selectedChars, bgColor, onDelete }: DropZoneProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });
  const { mutate, data, isPending, isError } = useWordDefinitionMutation();

  const handleClick = () => {
    mutate(selectedChars.join("").toLowerCase());
  };

  return (
    <S.DropZoneContainer>
      <S.DropZone
        ref={setNodeRef}
        id="drop-zone"
        $isOver={isOver}
        style={{
          border: isOver ? `2px dashed ${bgColor}` : "none",
        }}
      >
        {selectedChars.map((char, i) => (
          <S.DropChar key={`${char}-${i}`}>{char}</S.DropChar>
        ))}
      </S.DropZone>

      {onDelete && selectedChars.length > 0 && (
        <S.Button
          onClick={() => onDelete(selectedChars[selectedChars.length - 1])}
        >
          <S.ButtonText>Delete</S.ButtonText>
        </S.Button>
      )}

      <S.Button onClick={handleClick}>
        <S.ButtonText>Check Definition</S.ButtonText>
      </S.Button>
      {isPending && <p>Loading...</p>}
      {isError && <p>Definition not found.</p>}
      {data && <p>{data.definition}</p>}
    </S.DropZoneContainer>
  );
};

export default DropZone;
