import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";
import { colors, typography } from "@styles/tokens";

export const S = {
  Minute: styled.div<{ isDummy?: boolean }>`
    display: flex;
    width: 100%;
    max-width: 500px;
    opacity: ${({ isDummy }) => (isDummy ? 0.4 : 1)};
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      margin-top: 15px; // 하나일 때 45으로 수정
    }
  `,

  MinuteTime: styled.span<{ isCurrent: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      ${({ isCurrent }) =>
        isCurrent && `border-bottom: 1px solid ${colors.black};`}
      width: 150px;
      text-align: center;
      @media (max-width: ${breakpoints.tablet}) {
        width: 100px;
      }
      @media (max-width: ${breakpoints.mobile}) {
        border: none;
      }
    }
  `,

  Text: styled.div<{
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
      padding: ${({ isPastNoValueMobile }) =>
        isPastNoValueMobile ? "15px" : 0};
    }
  `,
  DummyBox: styled.div`
    padding: 15px;
    min-width: 150px;
    height: 198px;
    border: 1px dashed ${colors.gray[300]};
    opacity: 0.3;
    border-radius: 12px;
    @media (max-width: ${breakpoints.mobile}) {
      height: 118px;
    }
  `,

  Question: styled.div`
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.normal};
    line-height: normal;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.base};
      margin-top: 10px;
    }
  `,

  Input: styled.textarea`
    width: 100%;
    margin-top: 5px;
    font-size: ${typography.fontSize.base};
    height: 100px;
    resize: none;
    border: none;
    outline: none;
    background: transparent;
    margin-top: 5px;
  `,

  Answer: styled.span`
    font-family: monospace;
    line-height: normal;
    margin-top: 5px;
    font-size: ${typography.fontSize.base};
    overflow: scroll;
    @media (max-width: ${breakpoints.mobile}) {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `,

  FutureOverlay: styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    pointer-events: none;
    border-radius: 10px;
  `,

  FutureText: styled.span`
    padding: 15px;
    font-size: ${typography.fontSize.base};
    position: absolute;
    @media (max-width: ${breakpoints.mobile}) {
      position: unset;
    }
  `,

  MinuteTimeWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  Line: styled.div`
    flex: 1;
    height: 1px;
    background: ${colors.black};
    opacity: 0.6;
  `,
};
