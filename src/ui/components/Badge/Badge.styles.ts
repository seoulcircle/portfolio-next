import styled from "@emotion/styled";

export const BadgeItem = styled.span<{ isActive?: boolean }>`
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "black" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  transition: 0.2s all ease-in-out;
`;
