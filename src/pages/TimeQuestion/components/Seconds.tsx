// components/Seconds.tsx
"use client";

import React from "react";
import * as S from "./Seconds.style";

interface SecondsProps {
  timeSeconds: string;
}

const Seconds = ({ timeSeconds }: SecondsProps) => {
  return (
    <S.Seconds>
      <span>{timeSeconds}</span>
    </S.Seconds>
  );
};

export default React.memo(Seconds); //timeSeconds가 바뀔 때만 리렌더
