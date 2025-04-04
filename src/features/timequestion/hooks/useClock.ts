"use client";

import { useEffect, useRef, useState } from "react";

export const useClock = () => {
  const [timeHour, setTimeHour] = useState<string>("00");
  const [timeMinutes, setTimeMinutes] = useState<string>("00");
  const [minuteList, setMinuteList] = useState<string[]>([]);
  const MIN_VISIBLE_MINUTES = 3;
  const prevMinuteRef = useRef<number>(-1); // 이전 분
  // const minuteTimerId = useRef<NodeJS.Timeout | null>(null); // 분 타이머의 id 저장소

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
    let frameId: number;

    const checkTime = () => {
      const now = new Date();
      const currentMinute = now.getMinutes();

      // 분이 바뀌었을 때만 실행
      if (currentMinute !== prevMinuteRef.current) {
        prevMinuteRef.current = currentMinute;
        updateMinuteData();
      }
      frameId = requestAnimationFrame(checkTime);
    };

    requestAnimationFrame(checkTime); // 다음 프레임 호출 예약

    return () => cancelAnimationFrame(frameId);
  }, []);

  return {
    timeHour,
    timeMinutes,
    minuteList,
  };
};

export default useClock;
