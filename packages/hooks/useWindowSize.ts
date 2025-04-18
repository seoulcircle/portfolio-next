// src/hooks/useWindowSize.ts
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const isClient = typeof window !== "undefined";

  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 빈 배열 유지

  return size;
};
