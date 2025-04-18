/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";
import { colors, typography } from "@styles/tokens/legacy";

export const S = {
  Developer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 90vw;
    font-size: ${typography.fontSize.xl};
    line-height: normal;
    display: flex;
    flex-direction: column;
    height: 90vh;
    overflow: scroll;
    background: ${colors.white};
    border-radius: 10px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100vw;
      border-radius: 0px;
      height: 90vh;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    gap: 1vw;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    position: relative;
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  `,

  Title: styled.div`
    width: 20%;
    position: sticky;
    padding-bottom: 100px;
    line-height: ${typography.lineHeight.normal};
    top: 0px;
    & h2 {
      font-size: ${typography.fontSize.xxl};
      font-weight: ${typography.fontWeight.bold};
    }
    & div {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      font-size: ${typography.fontSize.lg};
      backdrop-filter: ${colors.glass.backdropFilter};
      background: ${colors.glass.light};
      pointer-events: none;
      padding: 10px 0;
      & h2 {
        font-weight: ${typography.fontWeight.semibold};
      }
      & div {
        display: flex;
        flex-direction: unset;
        gap: 10px;
      }
    }
  `,

  ArticleItem: styled.div`
    width: 80%;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  `,
  Article: styled.article`
    margin-bottom: 3vh;
    line-height: ${typography.lineHeight.normal};
    padding-bottom: 1vh;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    & p {
      margin-bottom: 10px;
    }
    & h4 {
      margin-top: 20px;
      font-weight: ${typography.fontWeight.semibold};
      margin-bottom: 5px;
    }
    & ul {
      margin-bottom: 10px;
      list-style: circle;
      margin-left: 20px;
    }
    & li {
      margin-bottom: 5px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      padding: 0 10px;
      & h4 {
        font-size: ${typography.fontSize.lg};
      }
      & p {
        font-size: ${typography.fontSize.base};
      }
      & li {
        font-size: ${typography.fontSize.base};
      }
    }
  `,
  ArticleHeader: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & h3 {
      font-size: ${typography.fontSize.xxl};
      font-weight: ${typography.fontWeight.bold};
    }
    & span {
      font-size: ${typography.fontSize.base};
    }
    @media (max-width: ${breakpoints.mobile}) {
      & h3 {
        font-size: ${typography.fontSize.xl};
      }
    }
  `,
};
