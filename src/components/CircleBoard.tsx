"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState, useRef } from "react";
import { S } from "./CircleBoard.style";
import { projects } from "../data/projectList";
import { useResponsiveRadius } from "@/hooks/useResponsiveRadius";
import ZoomContent from "./ZoomContent";

const HOUR_COUNT = 60;

const CircularMenu = () => {
  const radius = useResponsiveRadius(0.2, { min: 70, max: 700 });

  const radius2 = useResponsiveRadius(0.27, { min: 100, max: 770 }); // 40% 비율 기준
  const [rotation, setRotation] = useState(0); // 현재 회전 각도
  const [isZoomed, setIsZoomed] = useState(false); // 확대 여부
  const ticks = Array.from({ length: HOUR_COUNT }, (_, i) => i);
  const [targetRotation, setTargetRotation] = useState<number | null>(null); // 특정 항목 클릭 시 목표 회전 각도
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomId, setZoomId] = useState<string | null>(null); // 클릭된 label의 id
  const [zoomAnimationDone, setZoomAnimationDone] = useState(false); // zoom 애니메이션 완료 여부

  const zoomedProject = projects.find((p) => p.id === zoomId);
  // 마운트 시 body 스크롤 방지, 언마운트 시 복구
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 바깥 스크롤 막기
    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트 사라질 때 원상복구
    };
  }, []);
  // 마우스 휠로 회전 각도 조절
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev + e.deltaY * 0.2); // 스크롤 감도 조정
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  //label 클릭 시 정각 위치로 회전 -> 확대
  const handleClick = (index: number) => {
    const anglePerTick = 360 / HOUR_COUNT; // 눈금 하나 당 회전 각도
    const targetAngle = -anglePerTick * index; // 클릭한 index에 해당하는 각도로 회전
    setTargetRotation(targetAngle);
    setIsZoomed(true); // 확대 상태로 전환
    const clickedLabel = projects.find((p) => p.index === index);
    if (clickedLabel) {
      setZoomId(clickedLabel.id);
    }
  };

  // label 클릭 후 정각으로 회전 애니메이션 처리
  useEffect(() => {
    if (targetRotation !== null) {
      const animate = () => {
        setRotation((prev) => {
          const diff = targetRotation - prev; // 목표 각도(-90) - 현재 회전 상태
          const step = diff * 0.03; // 속도 조절

          if (Math.abs(diff) < 10) {
            // 목표와 가까워지면 애니메이션 종료
            setTargetRotation(null);
            return targetRotation;
          }

          requestAnimationFrame(animate); // 반복 호출
          return prev + step; // 현재 각도 + step만큼
        });
      };

      requestAnimationFrame(animate);
    }
  }, [targetRotation]);

  //zoomout
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsZoomed(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // getting ceneterd Label's Index when rotation happens
  const getCenteredLabelIndex = (rotation: number) => {
    const anglePerTick = 360 / HOUR_COUNT; // single angle per one tick
    const normalized = ((rotation % 360) + 360) % 360; // 0~359 사이로 보정
    const index = Math.round(-normalized / anglePerTick); // 음수 보정 전
    console.log((index + HOUR_COUNT) % HOUR_COUNT);
    return (index + HOUR_COUNT) % HOUR_COUNT; //
  };

  // update zoomProject when rotation happens
  useEffect(() => {
    if (!isZoomed) return;
    const centeredIndex = getCenteredLabelIndex(rotation);
    const centeredProject = projects.find((p) => p.index === centeredIndex);
    if (centeredProject) {
      setZoomId(centeredProject.id);
    }
  }, [rotation, isZoomed]);

  return (
    <>
      <S.Wrapper
        animate={{ scale: isZoomed ? 2 : 1 }}
        onAnimationComplete={() => {
          if (isZoomed) {
            setZoomAnimationDone(true);
          } // zoom in complete
          else setZoomAnimationDone(false); // zoom out
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: 0,
        }}
      >
        {isZoomed && (
          <S.GlassOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setIsZoomed(false)}
          />
        )}

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
                    radius + tickHeight
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
                  transform: `rotate(${angle}deg) translateY(-${radius2}px)`,
                }}
              >
                <S.Label
                  onClick={() => handleClick(index)}
                  style={{
                    transform: `translateX(-50%) rotate(${
                      -angle - rotation
                    }deg)`,
                    fontWeight: isCentered ? 600 : 400,
                    fontSize: isCentered ? "19px" : "18px",
                  }}
                >
                  {name}
                </S.Label>
              </S.LabelWrapper>
            );
          })}
        </S.Container>
      </S.Wrapper>
      {isZoomed &&
        zoomAnimationDone &&
        zoomedProject && ( // zoomed, zoom animation completed,
          <div ref={containerRef} onClick={(e) => e.stopPropagation()}>
            <ZoomContent project={zoomedProject} />
          </div>
        )}
    </>
  );
};

export default CircularMenu;
