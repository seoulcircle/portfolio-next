import { useDroppable } from "@dnd-kit/core";
import { S } from "./DropZone.styles";
import { DropZoneProps } from "../types/alphabet.types";
import { usePapagoTranslationMutation } from "../hooks/usePapagoTranslationMutation";
import { X, Languages } from "lucide-react";

const DropZone = ({ selectedChars, bgColor, onDelete }: DropZoneProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });
  const { mutate, data, isPending, isError } = usePapagoTranslationMutation();

  const handleClick = () => {
    mutate(selectedChars.join("").toLowerCase());
  };

  return (
    <S.DropZoneContainer>
      <S.DefinitionWrapper>
        {isPending && <p>Loading...</p>}
        {isError && <p>번역 실패</p>}
        {data && <p>{data.translated}</p>}
      </S.DefinitionWrapper>
      <S.DropZoneWrapper>
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
          {onDelete && selectedChars.length > 0 && (
            <X
              onClick={() => onDelete(selectedChars[selectedChars.length - 1])}
              style={{
                cursor: "pointer",
                marginBottom: "40px",
                marginLeft: "10px",
              }}
              size={16}
            />
          )}
          <S.Button onClick={handleClick}>
            <Languages
              style={{ cursor: "pointer" }}
              size={36}
              strokeWidth={2}
            />
          </S.Button>
        </S.DropZone>
      </S.DropZoneWrapper>
    </S.DropZoneContainer>
  );
};

export default DropZone;
