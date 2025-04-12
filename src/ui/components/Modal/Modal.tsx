import { AnimatePresence } from "framer-motion";
import { ModalProps } from "./Modal.types";
import { modalAnimationTokens } from "@/animations/tokens/modal";
import IconButton from "@/ui/components/Button/IconButton/IconButton";
import { Overlay, ModalContent, Body } from "./Modal.styles";
import { X } from "lucide-react";

export const Modal = ({
  isOpen,
  onClose,
  children,
  animationType,
  responsiveSize,
  showCloseButton = true,
}: ModalProps) => {
  const { overlay, content } = modalAnimationTokens[animationType || "slideUp"];

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay {...overlay} onClick={onClose}>
          <ModalContent
            {...content}
            responsiveSize={responsiveSize}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <IconButton
                aria-label="닫기"
                icon={<X size={30} strokeWidth={1.5} />}
                onClick={onClose}
                style={{ position: "absolute", top: "20px", right: "20px" }}
              />
            )}
            <Body>{children}</Body>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
