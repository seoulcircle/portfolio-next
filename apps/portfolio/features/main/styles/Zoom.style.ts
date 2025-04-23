/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";
import { motion } from "framer-motion";
import { colors, typography } from "@styles/tokens/legacy";
export const S = {
  Detail: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 90vw;
    font-size: ${typography.fontSize.xl};
    line-height: normal;
    display: flex;
    gap: 3vw;
    align-items: center;

    & div {
      margin-top: 10px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      font-size: ${typography.fontSize.lg};
    }
  `,

  GlassOverlay: styled(motion.div)`
    position: absolute;
    inset: 0;
    z-index: 1;
    backdrop-filter: ${colors.glass.backdropFilter};
    background: ${colors.glass.light};
    pointer-events: none;
  `,

  ThumbImgWrapper: styled.div`
    position: relative;
    width: 50%;
    aspect-ratio: 3 / 2;
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  `,

  DetailInfo: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & a {
      text-decoration: none;
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  `,

  Introduction: styled.div`
    font-size: ${typography.fontSize.xl};
    line-height: ${typography.lineHeight.normal};
    & p {
      margin-top: 10px;
      word-break: keep-all;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.lg};
      & p {
        word-break: unset;
      }
    }
  `,

  DemoGitWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  Velog: styled.a`
    color: black;
    margin-top: 10px;
  `,
};
