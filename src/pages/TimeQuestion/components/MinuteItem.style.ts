import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";

export const Minute = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-top: 15px;
  }
`;
export const MinuteTime = styled.span<{ isCurrent: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    ${({ isCurrent }) => isCurrent && `border-bottom: 1px solid black;`}
    width: 150px;
    text-align: center;
    @media (max-width: ${breakpoints.tablet}) {
      width: 100px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      border: none;
    }
  }
`;
export const Text = styled.div<{
  isFuture: boolean;
  isPastNoValueMobile: boolean;
  isPast: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  min-width: 150px;
  height: 198px;
  @media (max-width: ${breakpoints.mobile}) {
    text-align: ${({ isFuture, isPastNoValueMobile }) =>
      isFuture || isPastNoValueMobile ? "center" : "unset"};
    height: ${({ isFuture, isPastNoValueMobile }) =>
      isFuture ? "80px" : isPastNoValueMobile ? "80px" : "130px"};
    padding: ${({ isPastNoValueMobile }) => (isPastNoValueMobile ? "15px" : 0)};
  }
`;

export const Question = styled.div`
  font-size: 18px;
  line-height: normal;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 17px;
    margin-top: 10px;
  }
`;

export const Input = styled.textarea`
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  height: 100px;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  margin-top: 5px;
`;
export const Answer = styled.span`
  font-family: monospace;
  line-height: normal;
  margin-top: 5px;
  font-size: 16px;
  overflow: scroll;
`;
export const FutureOverlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.15);
  pointer-events: none;
  border-radius: 10px;
`;

export const FutureText = styled.span`
  padding: 15px;
  font-size: 16px;
  position: absolute;
  @media (max-width: ${breakpoints.mobile}) {
    position: unset;
  }
`;

export const MinuteTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Line = styled.div`
  flex: 1;
  height: 1px;
  background: black;
  opacity: 0.6;
`;
