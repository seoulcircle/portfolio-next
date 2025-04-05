"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  margin: 0 auto;
`;

const Bar = styled(motion.div, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "active",
})<{ active: boolean }>`
  position: absolute;
  width: 6px;
  height: ${({ active }) => (active ? "24px" : "12px")};
  background-color: ${({ active }) => (active ? "#202020" : "#ffffff")};
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform-origin: center -30px;
  transition: all 0.2s ease-in-out;
`;

const Spinner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 200); // 회전 속도 조절
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {Array.from({ length: total }).map((_, i) => (
        <Bar
          key={i}
          active={i === activeIndex}
          style={{
            transform: `rotate(${i * 30}deg) translate(-50%, -50%)`,
          }}
        />
      ))}
    </Wrapper>
  );
};

export default Spinner;
