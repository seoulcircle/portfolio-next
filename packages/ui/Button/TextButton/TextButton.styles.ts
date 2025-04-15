import styled from "@emotion/styled";
import { breakpoints } from "../../../styles/theme";
import {
  colors,
  shadows,
  typography,
  spacing,
} from "../../../styles/tokens/legacy";

export const Button = styled.button<{
  variant: "black" | "white";
  size?: "xs" | "sm" | "md" | "lg";
}>`
  all: unset;
  cursor: pointer;
  border-radius: 9999px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  box-shadow: ${shadows.md};
  background-color: ${({ variant }) =>
    variant === "black" ? colors.black : colors.white};
  color: ${({ variant }) =>
    variant === "black" ? colors.white : colors.black};
  font-size: ${({ size }) => {
    switch (size) {
      case "xs":
        return typography.fontSize.xs;
      case "sm":
        return typography.fontSize.sm;
      case "lg":
        return typography.fontSize.lg;
      default:
        return typography.fontSize.base;
    }
  }};

  padding: ${({ size }) => {
    switch (size) {
      case "xs":
        return "4px 8px";
      case "sm":
        return "6px 12px";
      case "lg":
        return "12px 20px";
      default:
        return "10px 16px";
    }
  }};
  transition:
    background 0.2s ease,
    color 0.2s ease;
  & span {
    height: 20px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
  }
`;
