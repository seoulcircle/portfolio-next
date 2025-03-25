"use client";

import { useEffect, useState } from "react";
export const useClock = () => {
  const [timeHour, setTimeHour] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");
  const [minuteList, setMinuteList] = useState<string[]>([]);
  const MIN_VISIBLE_MINUTES = 3;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      const second = now.getSeconds().toString().padStart(2, "0");

      setTimeHour(hour);
      setTimeMinutes(minute);
      setTimeSeconds(second);

      const minuteNum = now.getMinutes();
      const length =
        minuteNum === 0 ? 1 : Math.max(minuteNum + 2, MIN_VISIBLE_MINUTES);
      const fullList = Array.from({ length }, (_, i) =>
        i.toString().padStart(2, "0")
      );
      setMinuteList(fullList);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    timeHour,
    timeMinutes,
    timeSeconds,
    minuteList,
  };
};

export default useClock;
