"use client";
import { useEffect, useState, useRef, useCallback } from "react";

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

  const DATE_KEY = "usertext_date";
  const STORAGE_KEY = "usertext";

  // 다음날 되면 로컬스토리지 답변 리셋
  useEffect(() => {
    const now = new Date();
    const currentKey = now.toISOString().slice(0, 10);
    const savedKey = localStorage.getItem(DATE_KEY);

    if (savedKey !== currentKey) {
      localStorage.setItem(DATE_KEY, currentKey);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setUserText([]); // 로컬스토리지 초기화
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUserText(JSON.parse(saved)); // 저장한 내용 불러옴
      }
    }
  }, []);

  // 스크롤 맨 아래로 자동 내리기
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [timeMinutes]);

  // text가 바뀔 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("usertext", JSON.stringify(userText));
  }, [userText]);

  // 텍스트 입력 변경 핸들러
  const handleChange = useCallback(
    (
      targetTimeKey: string,
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newAnswer = e.target.value;
      const minute = +targetTimeKey.split(":")[1]; // 12:14->14
      const question = randomQuestion[minute];

      // 답변 수정(덮어쓰기)
      setUserText((prev) => {
        const existing = prev.find((item) => item.time === targetTimeKey);
        if (existing) {
          // 쓰던중이라면 수정 가능
          return prev.map((item) =>
            item.time === targetTimeKey ? { ...item, answer: newAnswer } : item
          );
        }

        // 없다면 새로 추가
        return [
          ...prev,
          {
            time: targetTimeKey,
            question,
            answer: newAnswer,
          },
        ];
      });
    },
    [randomQuestion]
  );

  return {
    userText,
    containerRef,
    handleChange,
  };
};
export default useUserWrite;
