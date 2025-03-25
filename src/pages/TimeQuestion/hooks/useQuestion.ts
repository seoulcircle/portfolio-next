"use client";

import { useEffect, useState } from "react";
import questionData from "../data/question.json";

const shuffleArray = (array: string[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const useQuestion = (): Record<number, string> => {
  const { questions } = questionData;
  const [minuteQuestions, setMinuteQuestions] = useState<
    Record<number, string>
  >({});

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    const cached = localStorage.getItem("shuffledQuestions");
    const cachedHour = localStorage.getItem("shuffledHour");

    const isValidCache =
      cached && cachedHour && Number(cachedHour) === currentHour;

    if (isValidCache) {
      setMinuteQuestions(JSON.parse(cached!));
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
