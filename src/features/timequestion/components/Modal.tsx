"use client";

import { useEffect, useRef, useState } from "react";
import { S } from "@/features/timequestion/styles/Modal.style";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { ModalProps } from "@/features/timequestion/types/timequestion.types";
import Tooltip from "@/ui/components/Tooltip";
import Badge from "@/ui/components/Badge/Badge";
const SavedAnswerModal = ({ modalData }: ModalProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeRefs = useRef<Record<string, HTMLSpanElement | null>>({});
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
    const handleResizeStart = () => {
      setSelectedTime(null);
    };

    if (selectedTime) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResizeStart);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResizeStart);
    };
  }, [selectedTime]);

  const tooltipPosition = isMobile
    ? {
        bottom: 17,
        left: 73,
      }
    : {
        top: modalPosition.top,
        bottom: modalPosition.bottom,
        left: modalPosition.left,
      };

  return (
    <S.SavedAnswer>
      {Object.keys(modalData).map((time) => (
        <Badge
          key={time}
          ref={(el) => {
            timeRefs.current[time] = el;
          }}
          isActive={selectedTime === time}
          onClick={() =>
            setSelectedTime((prev) => (prev === time ? null : time))
          }
          style={{ marginBottom: "10px" }}
        >
          {time}
        </Badge>
      ))}
      {selectedTime && (
        <Tooltip
          isOpen={!!selectedTime}
          onClose={() => setSelectedTime(null)}
          isMobile={isMobile}
          position={tooltipPosition}
        >
          <h2>{modalData[selectedTime]?.question}</h2>
          <p>{modalData[selectedTime]?.answer}</p>
        </Tooltip>
      )}
    </S.SavedAnswer>
  );
};

export default SavedAnswerModal;
