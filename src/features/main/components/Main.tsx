"use client";

import { useState, useRef } from "react";
import { S } from "@/features/main/styles/CircleBoard.style";
import { projects } from "@/features/main/data/projectList";
import { useResponsiveRadius } from "@/hooks/useResponsiveRadius";
import ZoomContent from "@/features/main/components/ZoomContent";
import { useIsMobile } from "@/hooks/useMediaQuery";
import Labels from "@/features/main/components/CircleBoardLabels";
import TickMarks from "@/features/main/components/CircleBoardTick";
import ZoomOverlay from "@/features/main/components/ZoomOverlay";
import useHasMounted from "@/features/main/hooks/useHasMounted";
import useScrollRotation from "@/features/main/hooks/useScrollRotation";
import useZoomRotation from "@/features/main/hooks/useZoomRotation";
import useClickOverlay from "@/features/main/hooks/useClickOverlay";
import { ResponsiveRadiusOptions } from "@/features/main/types/main.types";

const Main = () => {
  const isMobile = useIsMobile();
  const tickRadius = useResponsiveRadius(isMobile ? 0.36 : 0.2, {
    min: 70,
    max: 700,
  } as ResponsiveRadiusOptions);
  const labelRadius = useResponsiveRadius(isMobile ? 0.5 : 0.27, {
    min: 100,
    max: 700,
  } as ResponsiveRadiusOptions);
  const hasMounted = useHasMounted();
  const [rotation, setRotation] = useState(0); // 현재 회전 각도
  const [isZoomed, setIsZoomed] = useState(false); // 확대 여부
  const [targetRotation, setTargetRotation] = useState<number | null>(null); // 특정 항목 클릭 시 목표 회전 각도
  const [zoomId, setZoomId] = useState<string | null>(null); // 클릭된 label의 id
  const [zoomAnimationDone, setZoomAnimationDone] = useState(false); // zoom 애니메이션 완료 여부
  const containerRef = useRef<HTMLDivElement | null>(null);
  const zoomedProject = projects.find((p) => p.id === zoomId);

  const { handleClick } = useZoomRotation({
    targetRotation,
    rotation,
    setRotation,
    setTargetRotation,
    setIsZoomed,
    setZoomId,
    isZoomed,
  });

  //zoomout
  useClickOverlay(containerRef, () => setIsZoomed(false));

  // 마우스 휠로 회전 각도 조절
  useScrollRotation(setRotation, isZoomed);

  if (!hasMounted) return null;

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
        <ZoomOverlay
          isZoomed={isZoomed}
          zoomAnimationDone={zoomAnimationDone}
          onClick={() => setIsZoomed(false)}
        />

        <S.Container style={{ transform: `rotate(${rotation}deg)` }}>
          <TickMarks tickRadius={tickRadius} />
          <Labels
            rotation={rotation}
            labelRadius={labelRadius}
            isMobile={isMobile}
            onClick={handleClick}
          />
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

export default Main;
