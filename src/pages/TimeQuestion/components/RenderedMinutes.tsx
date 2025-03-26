import React from "react";
import { AnimatePresence } from "framer-motion";
import MinuteItem from "./MinuteItem";
import * as S from "./RenderedMinutes.style";

interface Props {
  minuteList: string[];
  timeHour: string;
  timeMinutes: string;
  userText: { time: string; answer: string }[];
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
  userText,
  randomQuestion,
  handleChange,
}: Props) => {
  const renderMinuteItem = (minute: string) => {
    const timeKey = `${timeHour}:${minute}`;
    const answer = userText.find((item) => item.time === timeKey)?.answer || "";

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

  if (minuteList.length === 1) {
    return (
      <S.CenteredItemWrapper>
        {renderMinuteItem(minuteList[0])}
      </S.CenteredItemWrapper>
    );
  }

  return (
    <S.MinuteList>
      <AnimatePresence initial={false}>
        {minuteList.map(renderMinuteItem)}
      </AnimatePresence>
    </S.MinuteList>
  );
};

export default React.memo(RenderedMinutes);
