/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@/styles/theme";
import { colors, typography } from "@/styles/tokens";

export const S = {
  Overlay: styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1200px;
    padding-left: 100px;
    @media (max-width: ${breakpoints.mobile}) {
      min-width: 300px;
      padding-left: 0;
      padding: 0 5vw;
    }
  `,

  SliderWrapper: styled.div`
    width: 70%;
    margin-bottom: 100px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      margin-bottom: 80px;
    }
  `,

  SliderTrack: styled.div`
    position: relative;
    width: 100%;
    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 100%;
      height: 1px;
      background: black;
      outline: none;
      transition: all 0.3s ease-in-out;
      & ::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: black;
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
    }
  `,

  SliderSun: styled(motion.div)`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    filter: blur(5px);
    @media (max-width: ${breakpoints.mobile}) {
      width: 50px;
      height: 50px;
      filter: blur(3px);
    }
  `,

  TimeLabels: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  `,

  TimeLabel: styled.span<{ isActive: boolean }>`
    width: 30px;
    height: 16px;
    font-size: ${typography.fontSize.sm};
    color: ${(props) => (props.isActive ? colors.white : colors.gray[300])};
    transition: all 0.3s;
    text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.xxs};
      & span {
        display: none;
      }
    }
  `,

  WeatherData: styled.div`
    position: absolute;
    bottom: 160px;
    color: ${colors.white};
    font-size: ${typography.fontSize.xl};
    & p {
      margin-bottom: 5px;
      &:first-of-type {
        font-weight: ${typography.fontWeight.semibold};
      }
    }
    @media (max-width: ${breakpoints.mobile}) {
      bottom: 140px;
      font-size: ${typography.fontSize.base};
    }
  `,
};
