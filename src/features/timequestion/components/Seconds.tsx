// components/Seconds.tsx
"use client";

import { useEffect, useState } from "react";
import { S } from "@/features/timequestion/styles/Seconds.style";

const Seconds = () => {
  const [timeSeconds, setTimeSeconds] = useState<string>("00");
  // 초 단위만 매초 업데이트
  useEffect(() => {
    const updateSeconds = () => {
      const now = new Date();
      const second = now.getSeconds().toString().padStart(2, "0");
      setTimeSeconds(second);
    };
    updateSeconds();
    const intervalId = setInterval(updateSeconds, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <S.Seconds>
      <span>{timeSeconds}</span>
    </S.Seconds>
  );
};

export default Seconds; //timeSeconds가 바뀔 때만 리렌더
