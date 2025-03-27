"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { S } from "./CircleBoard.style";
import { projects } from "../data/projectList";

const HOUR_COUNT = 60;

const CircularMenu = () => {
  const [rotation, setRotation] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const ticks = Array.from({ length: HOUR_COUNT }, (_, i) => i);
  const [targetRotation, setTargetRotation] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // 바깥 스크롤 막기
    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트 사라질 때 원상복구
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev + e.deltaY * 0.2); // 스크롤 감도 조정
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const handleClick = (index: number) => {
    const anglePerTick = 360 / HOUR_COUNT;
    const targetAngle = -anglePerTick * index;
    setRotation(targetAngle);
    setIsZoomed(true);
  };

  useEffect(() => {
    if (targetRotation !== null) {
      const animation = requestAnimationFrame(() => {
        setRotation((prev) => {
          const diff = targetRotation - prev;
          const step = diff * 0.1;
          if (Math.abs(diff) < 0.5) {
            setTargetRotation(null);
            return targetRotation;
          }
          return prev + step;
        });
      });

      return () => cancelAnimationFrame(animation);
    }
  }, [rotation, targetRotation]);

  return (
    <S.Wrapper
      animate={{ scale: isZoomed ? 1.8 : 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 1,
      }}
    >
      <S.Container style={{ transform: `rotate(${rotation}deg)` }}>
        {ticks.map((_, i) => {
          const angle = (360 / HOUR_COUNT) * i;
          const isMajorTick = [0, 5, 10, 20, 25, 35, 45].includes(i);
          const tickHeight = isMajorTick ? 24 : 10;
          return (
            <S.Tick
              key={i}
              style={{
                transform: `rotate(${angle}deg) translateY(-${
                  200 + tickHeight
                }px)`,
                transformOrigin: "top center",
                backgroundColor: isMajorTick ? "#c61a1a" : "#545454",
                height: `${tickHeight}px`,
              }}
            />
          );
        })}

        {projects.map(({ index, id, name }) => {
          const angle = (360 / HOUR_COUNT) * index;
          const actualAngle = (angle + rotation) % 360;
          const normalizedAngle =
            actualAngle < 0 ? actualAngle + 360 : actualAngle;
          const isCentered = normalizedAngle < 6 || normalizedAngle > 354;
          return (
            <S.LabelWrapper
              key={id}
              style={{
                transform: `rotate(${angle}deg) translateY(-260px)`,
              }}
            >
              <S.Label
                onClick={() => handleClick(index)}
                style={{
                  transform: `translateX(-50%) rotate(${-angle - rotation}deg)`,
                  fontWeight: isCentered ? 600 : 400,
                  fontSize: isCentered ? "17px" : "16px",
                }}
              >
                {name}
              </S.Label>
            </S.LabelWrapper>
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
};

export default CircularMenu;
