/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors, shadows } from "@/styles/tokens";

import { breakpoints } from "@/styles/theme";

export const TooltipWrapper = styled(motion.div)`
  position: fixed;
  width: 350px;
  z-index: 999;
  max-height: 200px;
  overflow: scroll;
  background: ${colors.glass.light};
  backdrop-filter: ${colors.glass.backdropFilter};
  -webkit-backdrop-filter: ${colors.glass.webkitBackdropFilter};
  box-shadow: ${shadows.md};
  padding: 20px;
  border-radius: 20px;
  line-height: normal;

  @media (max-width: ${breakpoints.mobile}) {
    width: 75vw;
    height: 109px;
    padding: 15px;
    border-radius: 15px;
    ::-webkit-scrollbar {
      display: none;
    }
    margin-left: 3vw;
  }
`;
