/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@/styles/theme";

export const S = {
  Wrapper: styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 50% 5%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media (max-width: ${breakpoints.mobile}) {
      position: absolute;
      top: 0;
      right: 50%;
      overflow: visible;
    }
  `,
  GlassOverlay: styled(motion.div)`
    position: absolute;
    inset: 0;
    z-index: 1;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  `,
  Container: styled(motion.div)`
    position: relative;
    width: 80vmin;
    height: 80vmin;
    min-width: 300px;
    min-height: 300px;
    max-width: 700px;
    max-height: 700px;
    border-radius: 50%;
  `,

  Tick: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    background-color: black;
  `,

  LabelWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
  `,

  Label: styled(motion.span)`
    position: absolute;
    bottom: 0; /* 눈금 끝을 기준으로 */
    left: -50%;
    transform: translate(-50%); /* 바깥으로 8px 띄움 */
    font-size: 16px;
    text-align: center;
    line-height: normal;
    cursor: pointer;
    @media (max-width: ${breakpoints.mobile}) {
      bottom: 5px;
    }
  `,
};
