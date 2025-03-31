import { useMemo } from "react";
import { useNowWeatherQuery } from "./queries/useNowWeatherQuery";
import { useTmrWeatherQuery } from "./queries/useTmrWeatherQuery";
import { useDustQuery } from "./queries/useDustQuery";
import {
  WeatherData,
  TodayWeather,
  DustData,
} from "@/pages/DayPalette/types/weather.types";

const useWeatherData = (
  today: string,
  hours: string,
  tmrToday: string,
  tomorrow: string
) => {
  const MINUTE_ZERO = "00";
  const { data: nowWeatherData } = useNowWeatherQuery(
    today,
    hours + MINUTE_ZERO
  );
  const { data: todayForecast } = useTmrWeatherQuery(today);
  const { data: tmrForecast } = useTmrWeatherQuery(tmrToday);
  const { data: dustList } = useDustQuery();

  const nowWeather: WeatherData = useMemo(() => {
    const temp = nowWeatherData?.find((d) => d.category === "T1H")?.obsrValue;
    const humidity = nowWeatherData?.find(
      (d) => d.category === "REH"
    )?.obsrValue;
    return {
      nowTemperature: temp ?? "-",
      humidity: humidity ?? "-",
      displayTemperature: temp ?? "-",
      displayHumidity: humidity ?? "-",
      calcTemperature: temp ?? "0",
      calcHumidity: humidity ?? "0",
    };
  }, [nowWeatherData]);

  const tmrWeather: WeatherData = useMemo(() => {
    const filtered = tmrForecast?.filter(
      (d) => d.fcstDate === tomorrow && d.fcstTime === hours + MINUTE_ZERO
    );
    const temp = filtered?.find((d) => d.category === "TMP")?.fcstValue;
    const humidity = filtered?.find((d) => d.category === "REH")?.fcstValue;
    return {
      temperature: temp ?? "-",
      humidity: humidity ?? "-",
      displayTemperature: temp ?? "-",
      displayHumidity: humidity ?? "-",
      calcTemperature: temp ?? "0",
      calcHumidity: humidity ?? "0",
    };
  }, [tmrForecast, tomorrow, hours]);

  const todayWeather: TodayWeather[] = useMemo(() => {
    const filtered = todayForecast?.filter(
      (d) => d.fcstDate === today && ["TMP", "REH"].includes(d.category)
    );

    return (
      filtered?.reduce<TodayWeather[]>((acc, item) => {
        const time = item.fcstTime.slice(0, 2);
        const category = item.category as "TMP" | "REH";
        const found = acc.find((t) => t.time === time);

        if (found) {
          if (category === "TMP") {
            found.temperature = item.fcstValue ?? "-";
            found.calcTemperature = item.fcstValue ?? "0";
          } else {
            found.humidity = item.fcstValue ?? "-";
            found.calcHumidity = item.fcstValue ?? "0";
          }
        } else {
          acc.push({
            time,
            ...(category === "TMP"
              ? {
                  temperature: item.fcstValue ?? "-",
                  calcTemperature: item.fcstValue ?? "0",
                }
              : {
                  humidity: item.fcstValue ?? "-",
                  calcHumidity: item.fcstValue ?? "0",
                }),
          });
        }

        return acc;
      }, []) ?? []
    );
  }, [todayForecast, today]);

  const dustData: DustData = useMemo(() => {
    const target = dustList?.find((d) => d.stationName === "종로구");
    const value = target?.pm10Value;
    return {
      pm10Value: value ?? "-",
      calcPm10Value: value ?? "0",
    };
  }, [dustList]);

  const tmrDustData: DustData = useMemo(() => {
    const target = dustList?.find((d) => d.stationName === "종로구");
    const value = target?.pm10Value24;
    return {
      pm10Value24: value ?? "-",
      calcPm10Value24: value ?? "0",
    };
  }, [dustList]);

  return {
    nowWeather,
    tmrWeather,
    todayWeather,
    dustData,
    tmrDustData,
  };
};

export default useWeatherData;
