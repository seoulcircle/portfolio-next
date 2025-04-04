import { useEffect, useRef } from "react";

export const useScrollRotation = (
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  isZoomed: boolean
) => {
  const touchStartY = useRef<number | null>(null); // 처음 터치 위치
  useEffect(() => {
    if (isZoomed) return;

    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev - e.deltaY * 0.2);
    };

    //모바일 터치 대응
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current! - currentY; // 터치 시작 위치와 현재 위치의 차이
      setRotation((prev) => prev - deltaY * 0.2);
      touchStartY.current = currentY;
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [setRotation, isZoomed]);
};

export default useScrollRotation;
