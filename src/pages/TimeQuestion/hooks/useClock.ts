"use client";

import { useEffect, useRef, useState } from "react";

export const useClock = () => {
  const [timeHour, setTimeHour] = useState<string>("00");
  const [timeMinutes, setTimeMinutes] = useState<string>("00");
  const [minuteList, setMinuteList] = useState<string[]>([]);
  const MIN_VISIBLE_MINUTES = 3;
  const minuteTimerId = useRef<NodeJS.Timeout | null>(null); // 분 타이머의 id 저장소

  // 분 리트 셋팅
  const updateMinuteData = () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    setTimeHour(hour);
    setTimeMinutes(minute);

    const minuteNum = now.getMinutes();
    const length =
      minuteNum === 0 ? 1 : Math.max(minuteNum + 2, MIN_VISIBLE_MINUTES);

    const fullList = Array.from(
      { length },
      (_, i) => (i < 60 ? i.toString().padStart(2, "0") : "") // 60분은 dummy
    );

    setMinuteList(fullList);
  };

  useEffect(() => {
    updateMinuteData();

    // 정확한 분 업데이트
    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds(); // 다음 분이 되기까지 몇 미리초 남았는지 계산

    const timeoutId = setTimeout(() => {
      updateMinuteData(); // 정확히 다음 분 진입 시 한 번 실행
      minuteTimerId.current = setInterval(updateMinuteData, 60000); // 이후 1분마다 실행
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeoutId);
      if (minuteTimerId.current) {
        clearInterval(minuteTimerId.current);
      }
    };
  }, []);

  return {
    timeHour,
    timeMinutes,
    minuteList,
  };
};

export default useClock;
