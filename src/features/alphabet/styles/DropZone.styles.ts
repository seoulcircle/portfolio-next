/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { breakpoints } from "@/styles/theme";
import { DropZoneProps } from "@/features/alphabet/types/alphabet.types";

export const S = {
  DropZoneContainer: styled.div`
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    padding: 1rem;
    min-height: 120px;
  `,
  DefinitionWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
    font-size: 50px;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 50px;
    height: 62px;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
  `,
  DropZoneWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 70%;
    width: 100%;
  `,
  DropZone: styled.div<DropZoneProps>`
    position: relative;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    width: 90%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 9999px;
    scrollbar-width: 10px;
    scrollbar-color: #000 #fff;
    overflow-x: scroll;
    padding: 0 30px 0 50px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      height: 100px;
      padding: 0 20px;
    }
  `,
  DropWord: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 400px;
    min-width: 250px;
    width: 70%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 1rem;
    @media (max-width: ${breakpoints.mobile}) {
      min-width: 110px;
    }
  `,
  DropChar: styled.div`
    font-size: 50px;
    margin-right: 5px;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 25px;
    }
  `,
  RightWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 30%;
  `,
  Button: styled.button`
    /* position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%); */
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4);
    color: black;
    cursor: pointer;
    border: none;
    @media (max-width: ${breakpoints.mobile}) {
      width: 40px;
      height: 40px;
      right: 17px;
    }
  `,
};
