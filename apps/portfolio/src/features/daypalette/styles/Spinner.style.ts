/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@styles/theme";
import isPropValid from "@emotion/is-prop-valid";

export const S = {
  Wrapper: styled.div`
    width: 80px;
    height: 80px;
    position: relative;
    margin: 0 auto;
    @media (max-width: ${breakpoints.mobile}) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,

  Bar: styled(motion.div, {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== "active",
  })<{ active: boolean }>`
    position: absolute;
    width: 6px;
    height: ${({ active }) => (active ? "24px" : "12px")};
    background-color: ${({ active }) => (active ? "#202020" : "#ffffff")};
    border-radius: 3px;
    top: 50%;
    left: 50%;
    transform-origin: center -30px;
    transition: all 0.2s ease-in-out;
  `,
};
