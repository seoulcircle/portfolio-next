import { useEffect } from "react";

export const useScrollRotation = (
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  isZoomed: boolean
) => {
  useEffect(() => {
    if (isZoomed) return;

    const handleScroll = (e: WheelEvent) => {
      setRotation((prev) => prev - e.deltaY * 0.2);
    };
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [setRotation, isZoomed]);
};

export default useScrollRotation;
