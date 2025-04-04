"use client";

import { S } from "@/features/alphabet/styles/styles";
import AlphabetRain from "@/features/alphabet/components/AlphabetRain";
import { DndContext } from "@dnd-kit/core";

const Alphabet = () => {
  return (
    <S.Wrapper>
      <DndContext>
        <AlphabetRain />
      </DndContext>
    </S.Wrapper>
  );
};

export default Alphabet;
