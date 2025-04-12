import { ModalAnimationType } from "@/animations/tokens/modal";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
  animationType?: ModalAnimationType;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}
