"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { S } from "./Modal.style";
import { useIsMobile } from "../../../hooks/useMediaQuery";

type ModalDataType = Record<string, { question: string; answer: string }>;

interface ModalProps {
  modalData: ModalDataType;
}

const SavedAnswerModal = ({ modalData }: ModalProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [modalPosition, setModalPosition] = useState<{
    top?: number;
    bottom?: number;
    left: number;
  }>({ left: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (selectedTime && timeRefs.current[selectedTime]) {
      const rect = timeRefs.current[selectedTime]!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const left = rect.left - 350 - 10;
      const isUpperHalf = rect.top < viewportHeight / 2;

      if (isUpperHalf) {
        setModalPosition({ top: rect.top, left });
      } else {
        setModalPosition({ bottom: viewportHeight - rect.top - 12, left });
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedTime(null);
      }
    };

    if (selectedTime) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedTime]);

  return (
    <S.SavedAnswer>
      {Object.keys(modalData).map(
        (
          time // 시간만 뽑음
        ) => (
          <S.SavedMinutes
            ref={(el) => {
              timeRefs.current[time] = el;
            }}
            key={time}
            onClick={() =>
              setSelectedTime((prev) => (prev === time ? null : time))
            }
          >
            {time}
          </S.SavedMinutes>
        )
      )}

      {selectedTime &&
        // 모달은 다른 위치에 그리기
        createPortal(
          <AnimatePresence>
            <S.MotionWrapper
              ref={modalRef}
              initial={
                isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 0.95 }
              }
              animate={
                isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }
              }
              exit={
                isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                zIndex: 9999,
                ...(isMobile
                  ? { bottom: "17px", left: "73px" }
                  : {
                      top: modalPosition.top,
                      bottom: modalPosition.bottom,
                      left: modalPosition.left,
                    }),
              }}
            >
              <h2>{modalData[selectedTime]?.question}</h2>
              <p>{modalData[selectedTime]?.answer}</p>
            </S.MotionWrapper>
          </AnimatePresence>,
          document.body
        )}
    </S.SavedAnswer>
  );
};

export default SavedAnswerModal;
