/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";
import { motion } from "framer-motion";

export const S = {
  Detail: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 90vw;
    font-size: 20px;
    line-height: normal;
    display: flex;
    gap: 3vw;
    align-items: center;

    & div {
      margin-top: 10px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      font-size: 18px;
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

  // ThumbImg: styled.img`
  //   border-radius: 16px;
  //   width: 50%;
  //   height: auto;
  //   @media (max-width: ${breakpoints.tablet}) {
  //     width: 100%;
  //   }
  // `,
  ThumbImgWrapper: styled.div`
    position: relative;
    width: 50%;
    aspect-ratio: 3 / 2;
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  `,

  DetailInfo: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & a {
      text-decoration: none;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  `,
  Introduction: styled.div`
    font-size: 22px;
    line-height: 1.5;
    & p {
      margin-top: 10px;
      word-break: keep-all;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
      & p {
        word-break: unset;
      }
    }
  `,
  Badge: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 1px;
    & span {
      border: 1px solid black;
      padding: 4px 12px;
      margin-right: 5px;
      border-radius: 9999px;
      font-size: 14px;
      text-align: center;
      white-space: nowrap;
      word-break: keep-all;
      overflow-wrap: normal;
    }
  `,

  RouteButton: styled.button`
    all: unset;
    cursor: pointer;
    border-radius: 9999px;
    margin-top: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    padding: 2px 15px 2px 5px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 10px;
    }
  `,
  CloseButton: styled.button`
    all: unset;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
  `,
  DemoGitWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  GitButton: styled.button`
    all: unset;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  `,
};
