import { useQuery } from "@tanstack/react-query";
import { getTmrWeather } from "../../api/weather";

export const useTmrWeatherQuery = (base_date: string) => {
  return useQuery({
    queryKey: ["nowWeather", base_date],
    queryFn: () => getTmrWeather(base_date),
    staleTime: 1000 * 60 * 10,
  });
};
