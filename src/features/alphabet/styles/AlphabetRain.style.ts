/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { colors } from "@/styles/tokens";

export const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: ${colors.white};
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    & > * {
      pointer-events: auto;
    }
  `,
};
