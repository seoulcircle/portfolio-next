"use client";

import { useEffect, useState } from "react";
import { S } from "../styles/ScrollIndicator.style";

interface ScrollIndicatorProps {
  hide?: boolean;
}

const ScrollIndicator = ({ hide = false }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
    };

    const handleWheel = () => {
      setIsVisible(false);
    };

    const handleTouchMove = () => {
      setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // hide prop이 true이면 숨김
  useEffect(() => {
    if (hide) {
      setIsVisible(false);
    }
  }, [hide]);

  if (!isVisible) return null;

  return (
    <S.Container
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: 1, 
        y: [0, -8, 0],
      }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ 
        opacity: { duration: 0.5, delay: 0.3 },
        y: { 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.3,
        }
      }}
    >
      <S.Icon>
        ⌄
      </S.Icon>
      <S.Text>SCROLL</S.Text>
    </S.Container>
  );
};

export default ScrollIndicator;
