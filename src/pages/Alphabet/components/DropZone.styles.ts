/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
// import { motion } from "framer-motion";
// import { breakpoints } from "@/styles/theme";
interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
  $isOver: boolean;
}
export const S = {
  DropZone: styled.div<DropZoneProps>`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    z-index: 1000;
    height: 400px;

    padding: 1.5rem;
    min-height: 120px;
  `,

  DropChar: styled.div`
    z-index: 100;
    font-size: 50px;
    margin-right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
