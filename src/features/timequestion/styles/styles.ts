import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 615px;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  `,

  Time: styled.div`
    display: flex;
    font-size: 90px;
    font-weight: 400;
    gap: 2vw;
    height: 615px;
    padding: 10px;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 70px;
      justify-content: center;
    }
    @media (max-width: ${breakpoints.mobile}) {
      height: 500px;
      font-size: 40px;
      margin-bottom: 50px;
    }
  `,

  Hours: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    & span {
      border-bottom: 1px solid black;
      width: 150px;
      text-align: center;
      @media (max-width: ${breakpoints.tablet}) {
        width: 100px;
      }
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 50px;
      & span {
        border: none;
        padding-bottom: 85px;
      }
    }
  `,

  Minutes: styled.div`
    display: flex;

    /* width: 650px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    scroll-behavior: smooth;
    @media (max-width: ${breakpoints.mobile}) {
      /* height: 400px; */
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `,

  FaderTop: styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    height: 350px;
    background: linear-gradient(to bottom, white, transparent);
    z-index: 10;
    pointer-events: none;
    @media (max-width: ${breakpoints.mobile}) {
      top: 60px;
      height: 150px;
    }
  `,
};
