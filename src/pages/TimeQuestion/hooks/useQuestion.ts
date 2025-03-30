"use client";
import { useState } from "react";

import questionData from "../data/question.json";

const shuffleArray = (array: string[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const generateMinuteQuestions = (): Record<number, string> => {
  const { questions } = questionData;
  const now = new Date();
  const currentHour = now.getHours();

  // SSR일 때는 캐싱 없이 바로 생성
  if (typeof window === "undefined") {
    const shuffled = shuffleArray(questions);
    const result: Record<number, string> = {};
    for (let i = 0; i < 60; i++) {
      result[i] = shuffled[i % shuffled.length];
    }
    return result;
  }

  // CSR일 때
  const cached = localStorage.getItem("shuffledQuestions");
  const cachedHour = localStorage.getItem("shuffledHour");

  const isValidCache =
    cached && cachedHour && Number(cachedHour) === currentHour;

  if (isValidCache) {
    return JSON.parse(cached!);
  } else {
    const shuffled = shuffleArray(questions);
    const result: Record<number, string> = {};
    for (let i = 0; i < 60; i++) {
      result[i] = shuffled[i % shuffled.length];
    }

    localStorage.setItem("shuffledQuestions", JSON.stringify(result));
    localStorage.setItem("shuffledHour", currentHour.toString());

    return result;
  }
};

const useQuestion = (): Record<number, string> => {
  const [questions] = useState(generateMinuteQuestions); // 최초 렌더 시에만 실행, 후에 렌더링 되어도 참조 유지
  return questions;
};

export default useQuestion;
