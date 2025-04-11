import Modal from "@/ui/components/Modal/Modal";
import { S } from "@/features/daypalette/styles/Modal.style";
import { WeatherModalProps } from "@/features/daypalette/types/weather.types";
import {
  formatDateWithDots,
  formatTime,
  getTargetDate,
} from "@/features/daypalette/utils/format-date";

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
    <Modal isOpen={isOpen} onClose={onClose}>
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
        <S.ColorCircle color={weatherColor ?? "rgba(200, 200, 200, 0.5)"} />
      </S.PaletteBox>
    </Modal>
  );
};

export default WeatherModal;
