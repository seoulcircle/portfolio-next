import React from "react";
import MinuteItem from "./MinuteItem";
import * as S from "./RenderedMinutes.style";

interface Props {
  minuteList: string[];
  timeHour: string;
  timeMinutes: string;
  userTextMap: Record<string, { question: string; answer: string }>;
  randomQuestion: Record<string, string>;
  handleChange: (
    key: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const RenderedMinutes = ({
  minuteList,
  timeHour,
  timeMinutes,
  userTextMap,
  randomQuestion,
  handleChange,
}: Props) => {
  const renderMinuteItem = (minute: string) => {
    const timeKey = `${timeHour}:${minute}`;
    const answer = userTextMap[timeKey]?.answer || "";

    return (
      <MinuteItem
        key={minute}
        minute={minute}
        hour={+timeHour}
        nowMinute={+timeMinutes}
        randomQuestion={randomQuestion[+minute]}
        value={answer}
        onChange={(e) => handleChange(timeKey, e)}
        isDisabled={minute !== timeMinutes}
      />
    );
  };

  if (timeMinutes === "00") {
    // 현재 시간이 0분, 즉 아이템이 하나만 있을 때
    return (
      <S.CenteredItemWrapper>
        {renderMinuteItem(minuteList[0])}
      </S.CenteredItemWrapper>
    );
  }

  return <S.MinuteList>{minuteList.map(renderMinuteItem)}</S.MinuteList>;
};

export default React.memo(RenderedMinutes);
