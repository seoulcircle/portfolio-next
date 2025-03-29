"use client";

import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const isWindow = typeof window !== "undefined"; // 브라우저?
  const initialState = isWindow ? window.innerWidth <= 639 : false;
  const [isMobile, setIsMobile] = useState(initialState);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    checkScreen(); // 초기 실행
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
};
