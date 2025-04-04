import { useEffect } from "react";
import { UseCloseZoomContentProps } from "../types/main.types";
export const useCloseZoomContent = ({
  overlayRef, // 모달 본체
  closeButtonRef, // 모달 닫기 버튼
  onClose, // 모달 닫기 핸들러
}: UseCloseZoomContentProps) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const target = e.target as Node;

      // 모달 안 클릭 -> 종료
      const clickOutside = !overlayRef.current?.contains(target);
      const clickButton = closeButtonRef.current?.contains(target);

      if (clickOutside || clickButton) {
        onClose();
      }
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [overlayRef, closeButtonRef, onClose]);
};

export default useCloseZoomContent;
