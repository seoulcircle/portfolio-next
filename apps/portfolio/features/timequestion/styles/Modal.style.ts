/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@styles/theme";

export const S = {
  SavedAnswer: styled(motion.div)`
    height: 550px;
    width: 100px;
    margin-top: 50px;
    overflow: scroll;
    z-index: 999;
    display: flex;
    align-items: center;

    flex-direction: column;
    ::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: ${breakpoints.mobile}) {
      position: fixed;
      height: 120px;
      left: 0;
      width: 80px;
      bottom: 6px;
    }
  `,
};
