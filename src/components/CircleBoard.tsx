"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { S } from "./CircleBoard.style";

const HOUR_COUNT = 60;
const labels = [
  { index: 0, text: "Hong Lee" },
  { index: 5, text: "Frontend developer" },
  { index: 10, text: "Archive" },
  { index: 20, text: "Day Palette" },
  { index: 25, text: "Minute Question" },
  { index: 35, text: "Archive" },
  { index: 45, text: "Falling Alphabet" },
];

const CircularMenu = () => {
  const [rotation, setRotation] = useState(0);
  const ticks = Array.from({ length: HOUR_COUNT }, (_, i) => i);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev + e.deltaY * 0.2); // 스크롤 감도 조정
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <S.Container style={{ transform: `rotate(${rotation}deg)` }}>
      {ticks.map((_, i) => {
        const angle = (360 / HOUR_COUNT) * i;
        const isMajorTick = [0, 5, 10, 20, 25, 35, 45].includes(i);
        const tickHeight = isMajorTick ? 34 : 14;
        return (
          <S.Tick
            key={i}
            style={{
              transform: `rotate(${angle}deg) translateY(-${
                200 + tickHeight
              }px)`,
              transformOrigin: "top center",
              backgroundColor: isMajorTick ? "darkred" : "black",
              height: `${tickHeight}px`,
            }}
          />
        );
      })}

      {labels.map(({ index, text }) => {
        const angle = (360 / HOUR_COUNT) * index;

        return (
          <S.LabelWrapper
            key={index}
            style={{
              transform: `rotate(${angle}deg) translateY(-260px)`,
            }}
          >
            <S.Label
              style={{
                transform: `translateX(-50%) rotate(${-angle - rotation}deg)`,
              }}
            >
              {text}
            </S.Label>
          </S.LabelWrapper>
        );
      })}
    </S.Container>
  );
};

export default CircularMenu;
