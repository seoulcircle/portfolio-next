import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";
import { colors, typography, shadows } from "@styles/tokens";

export const S = {
  Wrapper: styled.div<{ gradient: string }>`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 400px;
    background: ${(props) => props.gradient};
    transition: background 0.1s ease-out;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  ModalWrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 750px;
    @media (max-width: ${breakpoints.mobile}) {
      min-width: auto;
      min-height: 615px;
    }
  `,

  CircleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    height: 100%;
    width: 100px;
    margin-left: 40px;
    z-index: 999;

    & button {
      width: 100px;
      height: 100px;
      padding: 20px;
      border-radius: 50px;
      border: none;
      box-shadow: ${shadows.md};
      color: ${colors.white};
      text-align: center;
      cursor: pointer;
      font-size: ${typography.fontSize.xl};
    }
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: row;
      gap: 10vw;
      width: 100%;
      height: auto;
      margin: 0;
      margin-top: 80px;
      align-items: center;
      & button {
        width: 80px;
        height: 80px;
        padding: 0;
        border-radius: 40px;
        font-size: ${typography.fontSize.base};
      }
    }
  `,

  Today: styled.button<{ startRGBA: string }>`
    background-color: ${(props) => `${props.startRGBA}`};
    text-align: center;
  `,

  SunMovement: styled.button`
    background: ${colors.glass.light};
    backdrop-filter: ${colors.glass.backdropFilter};
    -webkit-backdrop-filter: ${colors.glass.webkitBackdropFilter};
  `,

  Tomorrow: styled.button<{ endRGBA: string }>`
    background-color: ${(props) => `${props.endRGBA}`};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
