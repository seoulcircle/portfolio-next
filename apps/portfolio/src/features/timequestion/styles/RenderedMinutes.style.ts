import styled from "@emotion/styled";
import { breakpoints } from "@styles/theme";

export const S = {
  CenteredItemWrapper: styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  MinuteList: styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; // 수정 필요 */
    height: 100%;
    @media (max-width: ${breakpoints.mobile}) {
      padding-top: 25px;
    }
  `,
};
