/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import Image from "next/image";
export const S = {
  Detail: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    /*max-width: 480px; */
    width: 80vw;
    font-size: 20px;
    line-height: normal;
    /* width: 100%;
    height: 100%; */
    /* max-width: 90vw; */
    display: flex;
    gap: 3vw;
    align-items: flex-start;
    & div {
      margin-top: 10px;
    }
    /* box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15); */
  `,
  // DetailWrapper: styled(motion.div)`
  //   position: relative;
  //   overflow: hidden;
  // `,
  ThumbImg: styled.img`
    border-radius: 16px;
    width: 50%;
    height: auto;
  `,
  DetailInfo: styled(motion.div)`
    /* position: absolute;
    inset: 0; */
    width: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & span {
      border: 1px solid black;
      padding: 4px 12px;
      margin-right: 5px;
      border-radius: 9999px; /* 핵심! */
      font-size: 14px;
    }
  `,
  RouteButton: styled.button`
    all: unset;
    cursor: pointer;
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
  `,
};
