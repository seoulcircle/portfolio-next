"use client";

import { useEffect, useState } from "react";
import { S } from "../styles/Spinner.style";

const Spinner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 200); // 회전 속도 조절
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Wrapper>
      {Array.from({ length: total }).map((_, i) => (
        <S.Bar
          key={i}
          active={i === activeIndex}
          style={{
            transform: `rotate(${i * 30}deg) translate(-50%, -50%)`,
          }}
        />
      ))}
    </S.Wrapper>
  );
};

export default Spinner;
