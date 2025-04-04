"use client";

import { S } from "@/features/timequestion/styles/styles";
import useClock from "@/features/timequestion/hooks/useClock";
import useUserWrite from "@/features/timequestion/hooks/useUserWrite";
import useQuestion from "@/features/timequestion/hooks/useQuestion";
import SavedAnswerModal from "@/features/timequestion/components/Modal";
import RenderedMinutes from "@/features/timequestion/components/RenderedMinutes";
import Seconds from "@/features/timequestion/components/Seconds";

const TimeQuestion = () => {
  const { timeHour, timeMinutes, minuteList } = useClock();

  const randomQuestion = useQuestion();

  const { userTextMap, containerRef, handleChange } = useUserWrite(
    timeMinutes,
    randomQuestion
  );

  return (
    <S.Wrapper>
      <S.Time>
        <S.Hours>
          <span>{timeHour}</span>
        </S.Hours>

        <S.Minutes ref={containerRef}>
          <S.FaderTop />
          <RenderedMinutes
            minuteList={minuteList}
            timeHour={timeHour}
            timeMinutes={timeMinutes}
            userTextMap={userTextMap}
            randomQuestion={randomQuestion}
            handleChange={handleChange}
          />
        </S.Minutes>
        <Seconds />
      </S.Time>
      <SavedAnswerModal modalData={userTextMap} />
    </S.Wrapper>
  );
};

export default TimeQuestion;
