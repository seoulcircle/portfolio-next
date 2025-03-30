"use client";

import { useEffect, useRef, useState } from "react";

export const useClock = () => {
  const [timeHour, setTimeHour] = useState("00");
  const [timeMinutes, setTimeMinutes] = useState("00");
  const [minuteList, setMinuteList] = useState<string[]>([]);
  const MIN_VISIBLE_MINUTES = 3;
  const minuteTimerId = useRef<NodeJS.Timeout | null>(null); // 분 타이머의 id 저장소

  // 초 단위만 매초 업데이트
  // useEffect(() => {
  //   const updateSeconds = () => {
  //     const now = new Date();
  //     const second = now.getSeconds().toString().padStart(2, "0");
  //     setTimeSeconds(second);
  //   };
  //   updateSeconds();
  //   const intervalId = setInterval(updateSeconds, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const updateMinuteData = () => {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      setTimeHour(hour);
      setTimeMinutes(minute);

      // 분 리스트 셋팅
      const minuteNum = now.getMinutes();
      const length =
        minuteNum === 0 ? 1 : Math.max(minuteNum + 2, MIN_VISIBLE_MINUTES); // 00분일 때는 하나만, 01분일 떄는 세 자리 확보용
      const fullList = Array.from({ length }, (_, i) =>
        i.toString().padStart(2, "0")
      );
      setMinuteList(fullList);
    };

    updateMinuteData(); // 처음 실행

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
