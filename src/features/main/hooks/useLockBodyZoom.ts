// src/hooks/useLockBodyZoomScroll.ts
import { useEffect } from "react";

const useLockBodyZoomScroll = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden"; // 스크롤 방지
      document.body.style.touchAction = "none"; // 핀치줌, 더블탭 방지
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [lock]);
};

export default useLockBodyZoomScroll;
