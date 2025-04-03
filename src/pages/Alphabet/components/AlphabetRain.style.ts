/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { motion } from "framer-motion";
// import { breakpoints } from "@/styles/theme";

export const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: white;
  `,

  Char: styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    user-select: none;
    cursor: grab;
    transition: all 0.3s ease;
  `,
};
