/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { motion } from "framer-motion";
import { breakpoints } from "@/styles/theme";

export const S = {
  // Overlay: styled(motion.div)`
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   background-color: rgba(0, 0, 0, 0.1);
  // `,

  // ModalContent: styled(motion.div)`
  //   position: relative;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   min-width: 430px;
  //   min-height: 400px;
  //   padding: 20px;
  //   background: rgba(255, 255, 255, 0.2);
  //   backdrop-filter: blur(10px);
  //   -webkit-backdrop-filter: blur(10px);
  //   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  //   color: white;
  //   line-height: 1.2;
  //   text-align: left;
  //   border-radius: 12px;
  //   z-index: 999;
  //   @media (max-width: ${breakpoints.mobile}) {
  //     min-width: 300px;
  //     min-height: 350px;
  //     margin-top: 100px;
  //   }
  // `,

  // CloseButton: styled.button`
  //   position: absolute;
  //   top: 10px;
  //   right: 10px;
  //   background: transparent;
  //   color: white;
  //   font-size: 24px;
  //   border: none;
  //   cursor: pointer;
  //   @media (max-width: ${breakpoints.mobile}) {
  //     font-size: 16px;
  //   }
  // `,

  DataBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  DateText: styled.p`
    font-size: 24px;
    font-weight: 300;
  `,

  TimeTextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
  `,

  TimeText: styled.p`
    font-size: 44px;
    font-weight: 500;
    padding-bottom: 5px;
    & span {
      font-size: 20px;
      margin-left: 5px;
      opacity: 0.5;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 36px;
    }
  `,

  WeatherText: styled.p`
    font-size: 30px;
    margin: 3px 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 20px;
    }
  `,

  PaletteBox: styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  PaletteTitle: styled.p`
    font-size: 24px;
    margin-top: 10px;
    font-size: 26px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 20px;
    }
  `,

  PaletteText: styled.p`
    font-size: 24px;
  `,

  ColorCircle: styled.div<{ color: string }>`
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
    width: 50px;
    height: 50px;
    background: ${({ color }) => color};
    border-radius: 25px;
    @media (max-width: ${breakpoints.mobile}) {
      margin-left: 0;
    }
  `,

  Notice: styled.p`
    font-size: 14px;
    margin-top: 10px;
    text-align: right;
    opacity: 0.5;
    margin-right: 10px;
  `,
};
