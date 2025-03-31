import { AnimatePresence } from "framer-motion";
import * as S from "./Modal.style";
import {
  WeatherData,
  DustData,
  ColorRGBA,
} from "@/pages/DayPalette/types/weather.types";
import {
  formatDateWithDots,
  formatTime,
  getTargetDate,
} from "@/pages/DayPalette/utils/format-date";

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
  weatherData: WeatherData | null;
  dustData: DustData | null;
  colorRGBA: ColorRGBA | null;
  modalType: "today" | "tomorrow";
}

const WeatherModal = ({
  isOpen,
  onClose,
  weatherData,
  dustData,
  colorRGBA,
  modalType,
}: WeatherModalProps) => {
  const targetDate = getTargetDate(modalType);
  const today = formatDateWithDots(targetDate);
  const time = formatTime(new Date(), modalType === "tomorrow");

  const temperature =
    modalType === "today"
      ? weatherData?.displayTemperature ?? "-"
      : weatherData?.displayTemperature ?? "-";

  const humidity = weatherData?.displayHumidity ?? "-";

  const fineDust =
    modalType === "today"
      ? dustData?.pm10Value ?? "-"
      : dustData?.pm10Value24 ?? "-";

  const weatherColor =
    modalType === "today" ? colorRGBA?.startRGBA : colorRGBA?.endRGBA;

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <S.ModalContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <S.CloseButton onClick={onClose}>×</S.CloseButton>
            <S.DataBox>
              <S.DateText>{today}</S.DateText>
              <S.TimeTextWrapper>
                <S.TimeText>
                  {time}
                  {modalType === "tomorrow" ? <span>기준</span> : null}
                </S.TimeText>
                <S.Notice>*종로구 기준</S.Notice>
              </S.TimeTextWrapper>
            </S.DataBox>
            <S.DataBox>
              <S.WeatherText>TEMPERATURE : {temperature}℃</S.WeatherText>
              <S.WeatherText>HUMIDITY : {humidity}%</S.WeatherText>
              <S.WeatherText>FINE DUST : {fineDust}㎍/㎥</S.WeatherText>
            </S.DataBox>
            <S.PaletteBox>
              <S.PaletteTitle>
                WEATHER PALETTE :<br /> {weatherColor}
              </S.PaletteTitle>
              <S.ColorCircle
                color={weatherColor ?? "rgba(200, 200, 200, 0.5)"}
              />
            </S.PaletteBox>
          </S.ModalContent>
        </S.Overlay>
      )}
    </AnimatePresence>
  );
};

export default WeatherModal;
