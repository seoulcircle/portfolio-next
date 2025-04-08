import { useState, useEffect } from "react";
import { formatDateCompact } from "@/features/daypalette/utils/format-date";
import { TimeState } from "@/features/daypalette/types/weather.types";

const useTime = () => {
  const [time, setTime] = useState<TimeState>({
    hours: "",
    today: "",
    tmrToday: "",
    tomorrow: "",
  });

  const getFormattedTime = (): TimeState => {
    const now = new Date();
    const minutes = now.getMinutes();

    // 매 정각 +10분 뒤에 API 들어와서 예외처리
    const hours =
      minutes < 10
        ? String((now.getHours() - 1 + 24) % 24).padStart(2, "0")
        : String(now.getHours()).padStart(2, "0");

    const today = formatDateCompact(now);

    // 다음날 예보 데이터는 오전 6시에 제공
    const tmrToday =
      now.getHours() < 6
        ? formatDateCompact(
            new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
          )
        : formatDateCompact(now);

    const tomorrow = formatDateCompact(
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    );

    return { hours, today, tmrToday, tomorrow };
  };

  useEffect(() => {
    setTime(getFormattedTime());
  }, []);

  return time;
};

export default useTime;
