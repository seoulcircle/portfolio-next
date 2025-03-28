/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@/styles/theme";

export const SavedAnswer = styled(motion.div)`
  height: 550px;
  width: 100px;
  margin-top: 50px;
  overflow: scroll;
  z-index: 999;
  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    height: 100px;
    width: fit-content;
    margin-left: 15px;
    bottom: 19px;
  }
`;

export const SavedMinutes = styled(motion.div)`
  position: relative;
  font-size: 18px;
  line-height: 1.6;
  cursor: pointer;
`;

export const MotionWrapper = styled(motion.div)`
  width: 350px;
  z-index: 999;
  max-height: 200px;
  overflow: scroll;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  line-height: normal;
  @media (max-width: ${breakpoints.mobile}) {
    width: 75vw;
    height: 109px;
    padding: 15px;
    border-radius: 15px;
  }
`;
