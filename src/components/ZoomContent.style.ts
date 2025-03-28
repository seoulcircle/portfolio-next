/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const S = {
  Detail: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    /*max-width: 480px; */
    width: 80vw;
    font-size: 20px;
    line-height: normal;
    /* width: 100%;
    height: 100%; */
    /* max-width: 90vw; */
    display: flex;
    gap: 3vw;
    align-items: flex-start;
    & div {
      margin-top: 10px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      font-size: 18px;
    }
  `,

  ThumbImg: styled.img`
    border-radius: 16px;
    width: 50%;
    height: auto;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
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
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  `,
  Introduction: styled.div`
    font-size: 22px;
    line-height: 1.5;
    & p {
      margin-top: 10px;
      word-break: keep-all;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
      & p {
        word-break: unset;
      }
    }
  `,
  Badge: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 1px;
    & span {
      border: 1px solid black;
      padding: 4px 12px;
      margin-right: 5px;
      border-radius: 9999px;
      font-size: 14px;
      text-align: center;
      white-space: nowrap;
      word-break: keep-all;
      overflow-wrap: normal;
    }
  `,

  RouteButton: styled.button`
    all: unset;
    cursor: pointer;
    border-radius: 9999px;
    margin-top: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    padding: 2px 15px 2px 5px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    @media (max-width: ${breakpoints.mobile}) {
      margin-top: 10px;
    }
  `,
};
