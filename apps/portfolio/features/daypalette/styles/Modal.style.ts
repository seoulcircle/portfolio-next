/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { motion } from "framer-motion";
import { breakpoints } from "@styles/theme";
import { typography, colors } from "@styles/tokens/legacy";

export const S = {
  DataBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  DateText: styled.p`
    font-size: ${typography.fontSize.xxl};
    font-weight: ${typography.fontWeight.light};
  `,

  TimeTextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.white};
  `,

  TimeText: styled.p`
    font-size: 44px;
    font-weight: ${typography.fontWeight.medium};
    padding-bottom: 5px;
    & span {
      font-size: ${typography.fontSize.xl};
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
      font-size: ${typography.fontSize.xl};
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
    font-size: ${typography.fontSize.xxl};
    margin-top: 10px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.xl};
    }
  `,

  PaletteText: styled.p`
    font-size: ${typography.fontSize.xxl};
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
    font-size: ${typography.fontSize.sm};
    margin-top: 10px;
    text-align: right;
    opacity: 0.5;
    margin-right: 10px;
  `,
};
