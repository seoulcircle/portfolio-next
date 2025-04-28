"use client";

import { useDroppable } from "@dnd-kit/core";
import { S } from "../styles/DropZone.styles";
import { DropZoneProps } from "../types/alphabet.types";
import { usePapagoTranslationMutation } from "../hooks/usePapagoTranslationMutation";
import { X, Languages } from "lucide-react";
import { useIsMobile } from "@hooks/useMediaQuery";
import { useEffect, useState } from "react";
const DropZone = ({ selectedChars, bgColor, onDelete }: DropZoneProps) => {
  const [isClient, setIsClient] = useState(false);
  const [translatedText, setTranslatedText] = useState("안녕하세요");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { setNodeRef, isOver } = useDroppable({
    id: "drop-zone",
  });
  const { mutate, isPending, isError } = usePapagoTranslationMutation();
  const isMobile = useIsMobile();

  const handleDelete = () => {
    onDelete?.(selectedChars[selectedChars.length - 1]);
    setTranslatedText("");
  };

  const handleClick = () => {
    setTranslatedText("");
    const word = selectedChars.join("");
    mutate(word, {
      onSuccess: (data) => {
        setTranslatedText(data.translated);
      },
    });
  };
  if (!isClient) return null;

  return (
    <S.DropZoneContainer>
      <S.DefinitionWrapper>
        {isPending && <p>Loading...</p>}
        {isError && <p>번역 실패</p>}
        {translatedText}
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
          <S.DropWord>
            {selectedChars.map((char, i) => (
              <S.DropChar key={`${char}-${i}`}>{char}</S.DropChar>
            ))}
          </S.DropWord>
          <S.RightWrapper>
            {onDelete && selectedChars.length > 0 && (
              <X
                aria-label="알파벳 삭제"
                onClick={handleDelete}
                style={{
                  cursor: "pointer",
                  marginBottom: isMobile ? "30px" : "50px",
                  marginRight: isMobile ? "5px" : "10px",
                  opacity: "0.5",
                }}
                size={isMobile ? 16 : 24}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleDelete();
                  }
                }}
              />
            )}
            <S.Button onClick={handleClick} aria-label="한국어로 번역">
              <Languages
                style={{ cursor: "pointer" }}
                size={isMobile ? 20 : 36}
                strokeWidth={isMobile ? 1.5 : 2}
                role="img"
                aria-hidden="true"
              />
            </S.Button>
          </S.RightWrapper>
        </S.DropZone>
      </S.DropZoneWrapper>
    </S.DropZoneContainer>
  );
};

export default DropZone;
