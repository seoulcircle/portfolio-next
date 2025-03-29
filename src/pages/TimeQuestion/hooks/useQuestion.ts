"use client";

import { useEffect, useState } from "react";
import questionData from "../data/question.json";

const shuffleArray = (array: string[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() })) // 랜덤 정렬용 값 부여
    .sort((a, b) => a.sort - b.sort) // 정렬
    .map(({ value }) => value); // 배열로 변환
};

const useQuestion = (): Record<number, string> => {
  const { questions } = questionData;
  const [minuteQuestions, setMinuteQuestions] = useState<
    Record<number, string>
  >({});

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    const cached = localStorage.getItem("shuffledQuestions"); // 섞인 질문들
    const cachedHour = localStorage.getItem("shuffledHour"); // 섞인 시간

    const isValidCache =
      cached && cachedHour && Number(cachedHour) === currentHour; // 질문 ㅇ, 섞인 시간 ㅇ, 지금 시간 === 섞인 시간

    // 질문 한시간마다 업데이트
    if (isValidCache) {
      setMinuteQuestions(JSON.parse(cached!)); // 절대 null 아님!
    } else {
      const shuffled = shuffleArray(questions);
      const result: Record<number, string> = {};

      for (let i = 0; i < 60; i++) {
        result[i] = shuffled[i % shuffled.length];
      }

      localStorage.setItem("shuffledQuestions", JSON.stringify(result));
      localStorage.setItem("shuffledHour", currentHour.toString());

      setMinuteQuestions(result);
    }
  }, [questions]);

  return minuteQuestions;
};

export default useQuestion;
