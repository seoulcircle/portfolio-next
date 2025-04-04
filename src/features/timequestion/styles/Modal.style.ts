/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@/styles/theme";

export const S = {
  SavedAnswer: styled(motion.div)`
    height: 550px;
    width: 100px;
    margin-top: 50px;
    overflow: scroll;
    z-index: 999;
    display: flex;
    align-items: center;

    flex-direction: column;
    ::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: ${breakpoints.mobile}) {
      position: fixed;
      height: 120px;
      left: 0;
      width: 80px;
      bottom: 6px;
    }
  `,

  SavedMinutes: styled(motion.span)`
    position: relative;
    font-size: 18px;
    line-height: 1.6;
    border-radius: 9999px;
    border: 1px solid #000;
    padding: 3px 10px;
    cursor: pointer;
    margin-bottom: 10px;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
      padding: 3px 7px;
    }
  `,

  MotionWrapper: styled(motion.div)`
    width: 350px;
    z-index: 999;
    max-height: 200px;
    overflow: scroll;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 20px;
    line-height: normal;
    @media (max-width: ${breakpoints.mobile}) {
      width: 75vw;
      height: 109px;
      padding: 15px;
      border-radius: 15px;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `,
};
