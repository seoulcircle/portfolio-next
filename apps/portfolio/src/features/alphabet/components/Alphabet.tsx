"use client";

import { S } from "../styles/styles";
import AlphabetRain from "./AlphabetRain";
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
