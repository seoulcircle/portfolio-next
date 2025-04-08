import React from "react";
import { S } from "@/features/timequestion/styles/MinuteItem.style";
import { useIsMobile } from "@/hooks/useMediaQuery";
import {
  MinuteItemProps,
  TimeState,
} from "@/features/timequestion/types/timequestion.types";

//현재 Minute 기준으로 작으면 -> placeholder 변경
const getTimeState = (minute: string, nowMinute: number): TimeState => {
  const current = Number(minute);
  if (current < nowMinute) return "past";
  if (current > nowMinute) return "future";
  return "present";
};

const MinuteItem = ({
  minute,
  nowMinute,
  randomQuestion,
  value,
  onChange,
  isDisabled,
}: MinuteItemProps) => {
  const isMobile = useIsMobile();
  // dummy 분기 처리
  if (minute === "") {
    return (
      <S.Minute isDummy={true}>
        <S.DummyBox />
      </S.Minute>
    );
  }
  const timeState = getTimeState(minute, nowMinute);
  const isNow = Number(minute) === nowMinute;
  const isPastNoValueMobile = timeState === "past" && !value && isMobile;

  // past 중 value가 있으면 -> 그대로 노출. 없으면 질문에 지나간 순간이에요
  return (
    <S.Minute>
      <S.MinuteTimeWrapper>
        {isNow && isMobile && <S.Line />}
        <S.MinuteTime isCurrent={isNow}>
          <span>{minute}</span>
        </S.MinuteTime>
        {isNow && isMobile && <S.Line />}
      </S.MinuteTimeWrapper>
      <S.Text
        isPast={timeState === "past"}
        isFuture={timeState === "future"}
        isPastNoValueMobile={isPastNoValueMobile}
      >
        {timeState === "future" && (
          <S.FutureOverlay>
            <S.FutureText>곧 다가올 순간이에요.</S.FutureText>
          </S.FutureOverlay>
        )}

        {timeState === "past" ? (
          value ? (
            <>
              <S.Question>{randomQuestion}</S.Question>
              <S.Answer>{value}</S.Answer>
            </>
          ) : (
            <S.Answer>지나간 순간이에요.</S.Answer>
          )
        ) : (
          <>
            {!(isMobile && timeState === "future") && (
              <>
                <S.Question>{randomQuestion}</S.Question>
                <S.Input
                  value={value}
                  onChange={onChange}
                  placeholder={"여기에 순간을 적어보세요."}
                  disabled={isDisabled}
                />
              </>
            )}
          </>
        )}
      </S.Text>
    </S.Minute>
  );
};

export default React.memo(MinuteItem);
