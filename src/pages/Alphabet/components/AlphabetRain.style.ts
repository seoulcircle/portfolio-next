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
    font-size: 100px;
    font-weight: bold;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  `,
};
