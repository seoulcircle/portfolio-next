/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const GroupTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ColorGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Box = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ color }) => `var(--${color})`};
  border: 1px solid #ccc;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 12px;
  padding-bottom: 4px;
  color: var(--colors-white);
`;

const S = {
  Wrapper,
  GroupTitle,
  ColorGroup,
  Box,
};

export default S;
