/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const S = {
  Wrapper: styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: 50% 5%;
    width: 100%;
    height: 100%;
    /* min-height: 730px; */
    overflow: hidden;
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
    /* max-width: 700px; */
    /* min-height: 730px; */
    border-radius: 50%;
    /* margin: 20vh auto; */
    min-width: 300px;
    min-height: 300px;
    max-width: 700px;
    max-height: 700px;
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
  `,
};
