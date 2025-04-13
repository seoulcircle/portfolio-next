import { useEffect, useState } from "react";

export const useResponsiveRadius = (
  scale = 0.35,
  options?: { min?: number; max?: number }
) => {
  const { min = 200, max = 800 } = options || {};
  const [radius, setRadius] = useState<number>(min);

  //첫 실행
  useEffect(() => {
    const base = Math.min(window.innerWidth, window.innerHeight); // 브라우저 넓이, 높이 중 작은 값
    const raw = base * scale;
    setRadius(Math.max(min, Math.min(raw, max)));
  }, []);

  //리사이즈 이벤트 핸들러
  useEffect(() => {
    const updateRadius = () => {
      if (typeof window === "undefined") return;
      const base = Math.min(window.innerWidth, window.innerHeight);
      const raw = base * scale;
      const clamped = Math.max(min, Math.min(raw, max));
      setRadius(clamped);
    };

    window.addEventListener("resize", updateRadius);
    updateRadius(); // 초기에도 적용
    return () => window.removeEventListener("resize", updateRadius);
  }, [scale, min, max]);

  return radius;
};
