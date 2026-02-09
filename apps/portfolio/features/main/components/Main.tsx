"use client";

import { useState, useRef } from "react";
import { S } from "../styles/CircleBoard.style";
import { projects } from "../data/projectList";
import { useResponsiveRadius } from "@hooks/useResponsiveRadius";
import ZoomContent from "./ZoomContent";
import { useIsMobile } from "@hooks/useMediaQuery";
import Labels from "./CircleBoardLabels";
import TickMarks from "./CircleBoardTick";
import ZoomOverlay from "./ZoomOverlay";
import useHasMounted from "../hooks/useHasMounted";
import useScrollRotation from "../hooks/useScrollRotation";
import useZoomRotation from "../hooks/useZoomRotation";
import useCloseZoomContent from "../hooks/useCloseZoomContent";
import { ResponsiveRadiusOptions } from "../types/main.types";
import ScrollIndicator from "./ScrollIndicator";

const Main = () => {
  const isMobile = useIsMobile();
  const tickRadius = useResponsiveRadius(isMobile ? 0.4 : 0.21, {
    min: 70,
    max: isMobile ? 200 : 700,
  } as ResponsiveRadiusOptions);
  const labelRadius = useResponsiveRadius(isMobile ? 0.55 : 0.3, {
    min: 100,
    max: isMobile ? 250 : 700,
  } as ResponsiveRadiusOptions);

  const hasMounted = useHasMounted();
  const [rotation, setRotation] = useState(0); // 현재 회전 각도
  const [isZoomed, setIsZoomed] = useState(false); // 확대 여부
  const [targetRotation, setTargetRotation] = useState<number | null>(null); // 특정 항목 클릭 시 목표 회전 각도
  const [zoomId, setZoomId] = useState<string | null>(null); // 클릭된 label의 id
  const [zoomAnimationDone, setZoomAnimationDone] = useState(false); // zoom 애니메이션 완료 여부
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
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
  useCloseZoomContent({
    overlayRef: containerRef,
    closeButtonRef: closeBtnRef,
    onClose: () => setIsZoomed(false),
  });

  // 마우스 휠로 회전 각도 조절
  useScrollRotation({ rotation, setRotation, setTargetRotation, isZoomed });

  if (!hasMounted) {
    return <div style={{ minHeight: '100vh', width: '100%' }} />;
  }

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
          onClose={() => setIsZoomed(false)}
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
            <ZoomContent
              onClose={() => setIsZoomed(false)}
              project={zoomedProject}
            />
          </div>
        )}
      <ScrollIndicator />
    </>
  );
};

export default Main;
