import { ModalAnimationType } from "@/animations/tokens/modal";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
  animationType?: ModalAnimationType;
  responsiveSize?: {
    desktop: { width: string; height: string };
    mobile: { width: string; height: string };
  };
}
