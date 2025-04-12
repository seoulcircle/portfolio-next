import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { TooltipProps } from "./Tooltip.types";
import * as S from "./Tooltip.styles";
import { tooltipAnimationTokens } from "@/animations/tokens/tooltip";

export const Tooltip = ({
  isOpen,
  onClose,
  position,
  children,
  isMobile = false,
  animationType,
}: TooltipProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const platform = isMobile ? "mobile" : "desktop";
  const fallbackType = isMobile ? "slide" : "scale";
  const key = animationType ?? fallbackType;

  const animation =
    platform === "mobile"
      ? tooltipAnimationTokens.mobile[
          key as keyof typeof tooltipAnimationTokens.mobile
        ]
      : tooltipAnimationTokens.desktop[
          key as keyof typeof tooltipAnimationTokens.desktop
        ];

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <S.TooltipWrapper
        ref={ref}
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
        style={{
          zIndex: 9999,
          ...position,
        }}
      >
        {children}
      </S.TooltipWrapper>
    </AnimatePresence>,
    document.body
  );
};

export default Tooltip;
