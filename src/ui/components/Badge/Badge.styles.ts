import styled from "@emotion/styled";
// import { breakpoints } from "@/styles/theme";
import { colors, spacing } from "@/styles/tokens";

export const BadgeItem = styled.span<{ isActive?: boolean }>`
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? colors.black : colors.white};
  color: ${({ isActive }) => (isActive ? colors.white : colors.black)};
  transition: 0.2s all ease-in-out;
  line-height: ${spacing.lg};
`;
