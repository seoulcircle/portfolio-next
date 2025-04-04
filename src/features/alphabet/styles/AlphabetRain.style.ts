/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { motion } from "framer-motion";
// import { breakpoints } from "@/styles/theme";

export const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: white;
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* 기본은 이벤트 없음 */
    z-index: 1000;
    & > * {
      pointer-events: auto; /* DropZone 내부 요소만 클릭 허용 */
    }
  `,
};
