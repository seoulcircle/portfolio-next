/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const S = {
  Developer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 80vw;
    font-size: 20px;
    line-height: normal;
    display: flex;
    flex-direction: column;
    height: 90vh;
    overflow: scroll;
    background: white;
    border-radius: 10px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100vw;
      border-radius: 0px;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    gap: 3vw;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    position: relative;
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    width: 30%;
    position: sticky;
    padding-bottom: 100px;
    line-height: 1.5;
    top: 0px;
    & h2 {
      font-size: 24px;
      font-weight: 800;
    }
    & div {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: ${breakpoints.mobile}) {
      padding-bottom: 0px;
      width: 100%;
      font-size: 18px;
      /* background: white; */
      backdrop-filter: blur(5px);
      background: rgba(255, 255, 255, 0.7);
      pointer-events: none;
      padding-bottom: 10px;
      & h2 {
        font-weight: 600;
      }
      & div {
        display: flex;
        flex-direction: unset;
        gap: 10px;
      }
    }
  `,
  ArticleItem: styled.div`
    width: 70%;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  `,
  Article: styled.article`
    margin-bottom: 2vh;
    line-height: 1.5;
    padding-bottom: 1vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    & h3 {
      font-size: 24px;
    }
    & h4 {
      margin-top: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    & span {
      font-size: 16px;
    }
    & p {
      margin-bottom: 10px;
    }
    & ul {
      margin-bottom: 10px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      & h3 {
        font-size: 22px;
        font-weight: 700;
      }
      & h4 {
        font-size: 18px;
      }
      & p {
        font-size: 17px;
      }
      & li {
        font-size: 17px;
      }
    }
  `,
};
