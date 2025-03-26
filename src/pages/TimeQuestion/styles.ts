import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 615px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Time = styled.div`
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
  }
`;

export const Hours = styled.div`
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
`;

export const Minutes = styled.div`
  display: flex;

  /* width: 650px; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  @media (max-width: ${breakpoints.mobile}) {
    /* height: 400px; */
  }
`;

export const FaderTop = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, white, transparent);
  z-index: 10;
  pointer-events: none;
  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }
`;
