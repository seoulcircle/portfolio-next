/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
// import { motion } from "framer-motion";
// import { breakpoints } from "@/styles/theme";
interface DropZoneProps extends HTMLAttributes<HTMLDivElement> {
  $isOver: boolean;
}
export const S = {
  DropZoneContainer: styled.div`
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin: 0 auto;

    width: 100%;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 1000;

    padding: 1.5rem;
    min-height: 120px;
  `,
  DropZone: styled.div<DropZoneProps>`
    backdrop-filter: blur(10px);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    width: 80%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;

    scrollbar-width: 10px;
    scrollbar-color: #000 #fff;
  `,

  DropChar: styled.div`
    font-size: 50px;
    margin-right: 5px;
  `,
  Button: styled.button`
    backdrop-filter: blur(10px);
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.3);
    color: black;
    padding: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
    width: 20%;
    cursor: pointer;
    border: none;
  `,
  ButtonText: styled.span`
    font-size: 20px;
    font-weight: 400;
  `,
};
