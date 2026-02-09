/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { breakpoints } from "@styles/theme";
import { colors, typography } from "@styles/tokens/legacy";

export const S = {
  Container: styled(motion.div)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    z-index: 100;
    pointer-events: none;
    user-select: none;

    @media (max-width: ${breakpoints.mobile}) {
      bottom: 30px;
      right: 30px;
    }
  `,

  Icon: styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${colors.black};
    line-height: 1;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 20px;
    }
  `,

  Text: styled.div`
    font-size: ${typography.fontSize.xs};
    font-weight: 500;
    color: ${colors.black};
    letter-spacing: 1.5px;
    line-height: 1;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 10px;
      letter-spacing: 1px;
    }
  `,
};
