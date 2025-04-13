import { useEffect, useCallback, useState } from "react";
import { useIsMobile } from "@hooks/useMediaQuery";
import { projects } from "../data/projectList";
import { UseZoomRotationParams } from "../types/main.types";

export const useZoomRotation = ({
  targetRotation,
  setRotation,
  setTargetRotation,
  setIsZoomed,
  setZoomId,
  isZoomed,
}: UseZoomRotationParams) => {
  const isMobile = useIsMobile();
  const HOUR_COUNT = 60;
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  // 모바일 경우 초기 회전 각도 설정
  useEffect(() => {
    if (isMobile) {
      setRotation(45);
    }
  }, [isMobile, setRotation]);

  // 사용자가 스크롤했는지 감지
  useEffect(() => {
    const handleScroll = () => setIsUserScrolled(true);
    const handleWheel = () => setIsUserScrolled(true);
    const handleTouchMove = () => setIsUserScrolled(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // 첫 로딩 시 회전 기능
  useEffect(() => {
    if (targetRotation !== null || isUserScrolled || isZoomed) return;

    let animationFrameId: number;

    const rotateContinuously = () => {
      setRotation((prev) => (prev + 0.06) % 360);
      animationFrameId = requestAnimationFrame(rotateContinuously);
    };

    rotateContinuously();

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetRotation, setRotation, isUserScrolled, isZoomed]);

  // 스크롤 시 회전 애니메이션
  useEffect(() => {
    if (targetRotation !== null) {
      const animate = () => {
        setRotation((prev) => {
          const diff = targetRotation - prev; // 목표 각도(-90)
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
  }, [targetRotation, setRotation, setTargetRotation]);

  //label 클릭 시 정각 위치로 회전 -> 확대
  const handleClick = useCallback(
    (index: number) => {
      const anglePerTick = 360 / HOUR_COUNT; // 눈금 하나 당 회전 각도
      const offset = isMobile ? 45 : 0; // 회전 기준 보정
      const targetAngle = -anglePerTick * index + offset; // 클릭한 index에 해당하는 각도로 회전

      setTargetRotation(targetAngle);
      setIsZoomed(true); // 확대 상태로 전환

      const clickedLabel = projects.find((p) => p.index === index);
      if (clickedLabel) {
        setZoomId(clickedLabel.id);
      }
    },
    [isMobile, setTargetRotation, setIsZoomed, setZoomId]
  );

  return { handleClick };
};

export default useZoomRotation;
