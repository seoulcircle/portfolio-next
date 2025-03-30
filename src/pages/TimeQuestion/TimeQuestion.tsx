"use client";

import * as S from "./styles";
import useClock from "./hooks/useClock";
import useUserWrite from "./hooks/useUserWrite";
import useQuestion from "./hooks/useQuestion";
import SavedAnswerModal from "./components/Modal";
import RenderedMinutes from "./components/RenderedMinutes";
import Seconds from "./components/Seconds";

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
