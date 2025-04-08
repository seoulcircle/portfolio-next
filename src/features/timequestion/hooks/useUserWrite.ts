"use client";
import { useEffect, useState, useRef, useCallback } from "react";

type UserTextMap = Record<string, { question: string; answer: string }>;

const useUserWrite = (
  timeMinutes: string,
  randomQuestion: Record<number, string>
) => {
  const [userTextMap, setUserTextMap] = useState<UserTextMap>({});
  // const [userText, setUserText] = useState<WriteItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const minute = new Date().getMinutes();
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
      setUserTextMap({}); // 로컬스토리지 초기화
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUserTextMap(JSON.parse(saved)); // 저장한 내용 불러옴
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userTextMap));
  }, [userTextMap]);

  // 텍스트 입력 변경 핸들러
  const handleChange = useCallback(
    (
      targetTimeKey: string,
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const newAnswer = e.target.value;

      // 답변 수정(덮어쓰기)
      setUserTextMap((prev) => {
        const prevItem = prev[targetTimeKey];
        if (prevItem?.answer === newAnswer) return prev;

        return {
          ...prev,
          [targetTimeKey]: {
            question: randomQuestion[minute],
            answer: newAnswer,
          },
        };
      });
    },
    [randomQuestion, minute]
  );

  return {
    userTextMap,
    containerRef,
    handleChange,
  };
};
export default useUserWrite;
