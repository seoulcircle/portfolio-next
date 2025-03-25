"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./Modal.style";
import { useIsMobile } from "../hooks/useMediaQuery";

interface ModalDataType {
  time: string;
  question: string;
  answer: string;
}

interface ModalProps {
  modalData: ModalDataType[];
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

      // 화면 기준 절반보다 위에 있으면 아래로 열고, 아니면 위로 띄움
      const isUpperHalf = rect.top < viewportHeight / 2;

      if (isUpperHalf) {
        // 아래로 열기 (top 기준)
        setModalPosition({
          top: rect.top, // 아래로 약간 여백
          left,
        });
      } else {
        // 위로 열기 (bottom 기준)
        setModalPosition({
          left,
          bottom: viewportHeight - rect.top - 12,
        });
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
      {modalData.map((item) => (
        <S.SavedMinutes
          ref={(el) => {
            timeRefs.current[item.time] = el;
          }}
          key={item.time}
          onClick={() =>
            setSelectedTime((prev) => (prev === item.time ? null : item.time))
          }
        >
          {item.time}
          {selectedTime === item.time &&
            createPortal(
              <S.Modal
                ref={modalRef}
                style={{
                  position: "fixed",
                  zIndex: 9999,
                  ...(isMobile
                    ? {
                        bottom: "17px",
                        left: "73px",
                      }
                    : {
                        top: modalPosition.top,
                        bottom: modalPosition.bottom,
                        left: modalPosition.left,
                      }),
                }}
              >
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </S.Modal>,
              document.body
            )}
        </S.SavedMinutes>
      ))}
    </S.SavedAnswer>
  );
};

export default SavedAnswerModal;
