import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const Seconds = styled.div`
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
    /* height: 400px; */
    width: 50px;
    & span {
      border: none;
      padding-bottom: 85px;
    }
  }
`;
