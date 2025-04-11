import { AnimatePresence } from "framer-motion";
import { modalAnimations } from "@/animations/modal";
import { ModalProps } from "./Modal.types";
import {
  Overlay,
  ModalContent,
  CloseButton,
  Title,
  Body,
} from "./Modal.styles";

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay {...modalAnimations.overlay} onClick={onClose}>
          <ModalContent
            {...modalAnimations.content}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            {title && <Title>{title}</Title>}
            <Body>{children}</Body>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
