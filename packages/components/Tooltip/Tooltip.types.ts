import { TooltipAnimationType } from "../../animations/tokens/tooltip";

export interface TooltipProps {
  isOpen: boolean;
  onClose: () => void;
  position: { top?: number; bottom?: number; left?: number; right?: number };
  children: React.ReactNode;
  isMobile?: boolean;
  animationType?: TooltipAnimationType;
}
