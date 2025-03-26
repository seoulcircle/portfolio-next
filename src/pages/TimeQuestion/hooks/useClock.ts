"use client";

import { useEffect, useRef, useState } from "react";

export const useClock = () => {
  const [timeHour, setTimeHour] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [timeSeconds, setTimeSeconds] = useState("00");
  const [minuteList, setMinuteList] = useState<string[]>([]);
  const MIN_VISIBLE_MINUTES = 3;

  // 🔄 초 단위만 매초 업데이트
  useEffect(() => {
    const updateSeconds = () => {
      const now = new Date();
      const second = now.getSeconds().toString().padStart(2, "0");
      setTimeSeconds(second);
    };

    updateSeconds(); // 즉시 실행
    const intervalId = setInterval(updateSeconds, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // 🔄 분 단위 관련 state는 1분마다만 업데이트
  const minuteIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMinuteData = () => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      setTimeHour(hour);
      setTimeMinutes(minute);

      const minuteNum = now.getMinutes();
      const length =
        minuteNum === 0 ? 1 : Math.max(minuteNum + 2, MIN_VISIBLE_MINUTES);
      const fullList = Array.from({ length }, (_, i) =>
        i.toString().padStart(2, "0")
      );
      setMinuteList(fullList);
    };

    updateMinuteData(); // 처음 실행

    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      updateMinuteData(); // 정확히 다음 분 진입 시 한 번 실행
      minuteIntervalRef.current = setInterval(updateMinuteData, 60000); // 이후 1분마다 실행
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      if (minuteIntervalRef.current) {
        clearInterval(minuteIntervalRef.current);
      }
    };
  }, []);

  return {
    timeHour,
    timeMinutes,
    timeSeconds,
    minuteList,
  };
};

export default useClock;
