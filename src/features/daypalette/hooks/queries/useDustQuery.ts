import { useQuery } from "@tanstack/react-query";
import { getDustData } from "../../api/dust";

export const useDustQuery = () => {
  return useQuery({
    queryKey: ["dustData"],
    queryFn: getDustData,
    staleTime: 1000 * 60 * 30, // 30분 캐싱
  });
};
