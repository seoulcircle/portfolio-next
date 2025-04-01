import { useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";
// import { getCenteredLabelIndex } from "../utils/getCenteredLabelIndex";
import { projects } from "../data/projectList";

interface UseZoomRotationParams {
  targetRotation: number | null;
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  setTargetRotation: React.Dispatch<React.SetStateAction<number | null>>;
  setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>;
  setZoomId: React.Dispatch<React.SetStateAction<string | null>>;
  isZoomed: boolean;
}

export const useZoomRotation = ({
  targetRotation,
  // rotation,
  setRotation,
  setTargetRotation,
  setIsZoomed,
  setZoomId,
}: // isZoomed,
UseZoomRotationParams) => {
  const isMobile = useIsMobile();
  const HOUR_COUNT = 60;

  // 모바일 경우 초기 회전 각도 설정
  useEffect(() => {
    if (isMobile) {
      setRotation(30);
    }
  }, [isMobile, setRotation]);

  //label 클릭 시 정각 위치로 회전 -> 확대
  const handleClick = useCallback(
    (index: number) => {
      const anglePerTick = 360 / HOUR_COUNT; // 눈금 하나 당 회전 각도
      const offset = isMobile ? 30 : 0; // 회전 기준 보정
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

  // 회전 애니메이션
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

  // pc에서 zoom 상태로 스크롤 시 프로젝트 변경
  // useEffect(() => {
  //   if (isMobile || !isZoomed) return;
  //   const centeredIndex = getCenteredLabelIndex(rotation, HOUR_COUNT);
  //   const centeredProject = projects.find((p) => p.index === centeredIndex);
  //   if (centeredProject) {
  //     setZoomId(centeredProject.id);
  //   }
  // }, [isMobile, rotation, isZoomed, setZoomId]);

  return { handleClick };
};

export default useZoomRotation;
