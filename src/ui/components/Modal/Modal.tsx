import { AnimatePresence } from "framer-motion";
import { ModalProps } from "./Modal.types";
import { modalAnimationTokens } from "@/animations/tokens/modal";

import { Overlay, ModalContent, CloseButton, Body } from "./Modal.styles";

export const Modal = ({
  isOpen,
  onClose,
  children,
  animationType,
  width,
  height,
  mobileWidth,
  mobileHeight,
  showCloseButton = true,
}: ModalProps) => {
  const { overlay, content } = modalAnimationTokens[animationType || "slideUp"];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay {...overlay} onClick={onClose}>
          <ModalContent
            {...content}
            customWidth={width}
            customHeight={height}
            mobileWidth={mobileWidth}
            mobileHeight={mobileHeight}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close modal">
                ×
              </CloseButton>
            )}
            <Body>{children}</Body>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
