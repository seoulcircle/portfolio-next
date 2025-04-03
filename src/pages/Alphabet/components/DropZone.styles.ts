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
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    padding: 1.5rem;
    min-height: 120px;
  `,
  DefinitionWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
    font-size: 30px;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 50px;
  `,
  DropZoneWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 70%;
    width: 100%;
  `,
  DropZone: styled.div<DropZoneProps>`
    position: relative;
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
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
    color: black;
    cursor: pointer;
    border: none;
  `,
};
