import { useState, useMemo, useEffect } from "react";
import { getRGBA, getLinearGradient } from "../utils/get-color";
import {
  WeatherData,
  TodayWeather,
  DustData,
  formatWeatherDisplay,
} from "../types/weather.types";

const useColor = (
  nowWeather: WeatherData | null,
  dustData: DustData | null,
  tmrWeather: WeatherData | null,
  tmrDustData: DustData | null,
  todayWeather: TodayWeather[],
  hours: string
) => {
  const DEFAULT_COLOR = "#000000";
  const [gradient, setGradient] = useState<string>(DEFAULT_COLOR);

  // 현재 날씨 표시 데이터
  const nowDisplayData = useMemo(
    () =>
      formatWeatherDisplay(
        nowWeather?.nowTemperature,
        nowWeather?.humidity,
        dustData?.pm10Value
      ),
    [nowWeather, dustData]
  );

  // 내일 날씨 표시 데이터
  const tmrDisplayData = useMemo(
    () =>
      formatWeatherDisplay(
        tmrWeather?.temperature,
        tmrWeather?.humidity,
        tmrDustData?.pm10Value24
      ),
    [tmrWeather, tmrDustData]
  );

  // 그라디언트 시작 색상
  const startRGBA = useMemo(
    () =>
      getRGBA({
        temp: Number(nowWeather?.calcTemperature ?? 0),
        humidity: Number(nowWeather?.calcHumidity ?? 0),
        hour: Number(hours),
        pm: Number(dustData?.calcPm10Value ?? 0),
      }),
    [nowWeather, dustData, hours]
  );

  // 그라디언트 끝 색상
  const endRGBA = useMemo(
    () =>
      getRGBA({
        temp: Number(tmrWeather?.calcTemperature ?? 0),
        humidity: Number(tmrWeather?.calcHumidity ?? 0),
        hour: (Number(hours) + 12) / 24,
        pm: Number(tmrDustData?.calcPm10Value24 ?? 0),
      }),
    [tmrWeather, tmrDustData, hours]
  );

  // Today의 원형 색상
  const dayColors = useMemo(() => {
    return todayWeather.map((data) => {
      const displayData = formatWeatherDisplay(data.temperature, data.humidity);
      return {
        hour: Number(data.time ?? 0),
        color: getRGBA({
          temp: Number(data.calcTemperature ?? 0),
          humidity: Number(data.calcHumidity ?? 0),
          hour: Number(data.time ?? 0),
          pm: 50,
        }),
        display: displayData,
      };
    });
  }, [todayWeather]);

  // 첫 로딩시 그라디언트 각도 설정
  useEffect(() => {
    setGradient(
      getLinearGradient({
        angle: 180,
        startColor: startRGBA,
        endColor: endRGBA,
      })
    );
  }, [startRGBA, endRGBA]);

  // 마우스의 위치에 따라 그라디언트 각도 변경
  const handleMouseMove = (e: React.MouseEvent) => {
    requestAnimationFrame(() => {
      const angle = (e.clientX / window.innerWidth) * 360;
      setGradient(
        getLinearGradient({
          angle,
          startColor: startRGBA,
          endColor: endRGBA,
        })
      );
    });
  };

  return {
    startRGBA,
    endRGBA,
    gradient,
    handleMouseMove,
    dayColors,
    nowDisplayData,
    tmrDisplayData,
  };
};

export default useColor;
