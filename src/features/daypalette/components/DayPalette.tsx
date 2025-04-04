"use client";

import { useState } from "react";
import { S } from "@/features/daypalette/styles/styles";
import WeatherModal from "@/features/daypalette/components/Modal";
import useTime from "@/features/daypalette/hooks/useTime";
import useWeatherData from "@/features/daypalette/hooks/useWeatherData";
import useColor from "@/features/daypalette/hooks/useColor";
import ColorSlider from "@/features/daypalette/components/ColorSlider";

const DayPalette = () => {
  const { hours, today, tmrToday, tomorrow } = useTime();
  const { nowWeather, tmrWeather, dustData, tmrDustData, todayWeather } =
    useWeatherData(today, hours, tmrToday, tomorrow);
  const { gradient, startRGBA, endRGBA, handleMouseMove, dayColors } = useColor(
    nowWeather,
    dustData,
    tmrWeather,
    tmrDustData,
    todayWeather,
    hours
  );

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [slider, setSlider] = useState(false);
  const handleOutsideClick = () => {
    if (activeModal || slider) {
      setActiveModal(null);
      setSlider(false);
    }
  };

  return (
    <S.Wrapper
      gradient={gradient}
      onMouseMove={handleMouseMove}
      onClick={handleOutsideClick}
    >
      <S.CircleWrapper>
        <S.Today startRGBA={startRGBA} onClick={() => setActiveModal("today")}>
          Now
        </S.Today>
        <S.SunMovement
          onClick={() => {
            setSlider((prev) => !prev);
          }}
        >
          Today
        </S.SunMovement>
        <S.Tomorrow
          endRGBA={endRGBA}
          onClick={() => setActiveModal("tomorrow")}
        >
          Tomorrow
        </S.Tomorrow>
      </S.CircleWrapper>
      <S.ModalWrapper>
        <WeatherModal
          isOpen={activeModal === "today"}
          onClose={() => setActiveModal(null)}
          weatherData={nowWeather}
          dustData={dustData}
          colorRGBA={{ startRGBA, endRGBA }}
          modalType="today"
        />
        <ColorSlider
          isOpen={slider}
          onClose={() => setSlider(false)}
          colors={dayColors}
          todayWeather={todayWeather}
        />

        <WeatherModal
          isOpen={activeModal === "tomorrow"}
          onClose={() => setActiveModal(null)}
          weatherData={tmrWeather}
          dustData={tmrDustData}
          colorRGBA={{ startRGBA, endRGBA }}
          modalType="tomorrow"
        />
      </S.ModalWrapper>
    </S.Wrapper>
  );
};

export default DayPalette;
