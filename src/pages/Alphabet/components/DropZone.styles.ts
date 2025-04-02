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
    border: 2px dashed #ccc;
    padding: 1.5rem;
    min-height: 120px;
    background-color: ${({ $isOver }) => ($isOver ? "#f1f8e9" : "#fff")};
  `,

  DropChar: styled.div`
    font-size: 2rem;
    margin-right: 0.5rem;
  `,
};
