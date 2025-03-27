/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const S = {
  Container: styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 200px auto;
  `,

  Tick: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.5px;
    background-color: black;
  `,

  LabelWrapper: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
  `,

  Label: styled.span`
    position: absolute;
    bottom: 0; /* 눈금 끝을 기준으로 */
    left: -50%;
    transform: translate(-50%); /* 바깥으로 8px 띄움 */
    font-size: 14px;
    text-align: center;
  `,
};
