"use client";
import { useEffect, useState, useRef } from "react";

type WriteItem = {
  time: string;
  question: string;
  answer: string;
};

const useUserWrite = (
  timeMinutes: string,
  randomQuestion: Record<number, string>
) => {
  const [userText, setUserText] = useState<WriteItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 날짜를 key로 저장
  const DATE_KEY = "usertext_date";
  const STORAGE_KEY = "usertext";

  useEffect(() => {
    const now = new Date();
    const currentKey = now.toISOString().slice(0, 13); // "2025-03-24T"

    const savedKey = localStorage.getItem(DATE_KEY);
    if (savedKey !== currentKey) {
      localStorage.setItem(DATE_KEY, currentKey);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setUserText([]);
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUserText(JSON.parse(saved));
      }
    }
  }, []);

  // 스크롤 맨 아래로 자동 내리기
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [timeMinutes]);

  // text가 바뀔 때마다 저장
  useEffect(() => {
    localStorage.setItem("usertext", JSON.stringify(userText));
  }, [userText]);

  // 텍스트 입력 변경 핸들러
  const handleChange = (
    targetTimeKey: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newAnswer = e.target.value;
    const minute = +targetTimeKey.split(":")[1]; // 12:14->14
    const question = randomQuestion[minute];

    setUserText((prev) => {
      // 시간이 아예 같은 게 이미 있다면 → 수정
      const existing = prev.find((item) => item.time === targetTimeKey);
      if (existing) {
        return prev.map((item) =>
          item.time === targetTimeKey ? { ...item, answer: newAnswer } : item
        );
      }

      // 없다면 → 새로 추가
      return [
        ...prev,
        {
          time: targetTimeKey,
          question,
          answer: newAnswer,
        },
      ];
    });
  };

  return {
    userText,
    containerRef,
    handleChange,
  };
};
export default useUserWrite;
