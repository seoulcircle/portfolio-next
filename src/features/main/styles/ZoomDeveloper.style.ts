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
    width: 90vw;
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
      height: 100vh;
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
      width: 100%;
      font-size: 18px;
      /* background: white; */
      backdrop-filter: blur(5px);
      background: rgba(255, 255, 255, 0.7);
      pointer-events: none;
      padding: 10px 0;
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
    width: 80%;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  `,
  Article: styled.article`
    margin-bottom: 3vh;
    line-height: 1.5;
    padding-bottom: 1vh;
    padding-left: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    & p {
      margin-bottom: 10px;
    }
    & h4 {
      margin-top: 20px;
      font-weight: 600;
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
  ArticleHeader: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    & h3 {
      font-size: 24px;
      font-weight: 700;
    }
    & span {
      font-size: 16px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      & h3 {
        font-size: 20px;
      }
    }
  `,
};
