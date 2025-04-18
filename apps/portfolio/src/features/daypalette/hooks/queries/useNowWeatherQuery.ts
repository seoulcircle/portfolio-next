import { useQuery } from "@tanstack/react-query";
import { getNowWeather } from "../../api/weather";

export const useNowWeatherQuery = (base_date: string, base_time: string) => {
  return useQuery({
    queryKey: ["nowWeather", base_date, base_time],
    queryFn: () => getNowWeather(base_date, base_time),
    staleTime: 1000 * 60 * 10,
  });
};
