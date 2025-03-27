import { useEffect, useState } from "react";

export const useResponsiveRadius = (
  scale = 0.35,
  options?: { min?: number; max?: number }
) => {
  const { min = 200, max = 800 } = options || {};

  const [radius, setRadius] = useState(() => {
    const base = Math.min(window.innerWidth, window.innerHeight);
    const raw = base * scale;
    return Math.max(min, Math.min(raw, max));
  });

  useEffect(() => {
    const updateRadius = () => {
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
