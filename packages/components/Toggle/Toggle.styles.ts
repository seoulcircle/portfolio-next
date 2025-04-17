import styled from "@emotion/styled";

export const ToggleContainer = styled.div<{
  $checked: boolean;
  $disabled?: boolean;
}>`
  width: 48px;
  height: 24px;
  border-radius: 14px;
  background-color: ${({ $checked, $disabled, theme }) => {
    if ($disabled)
      return theme?.mode === "dark" ? "var(--gray-70)" : "var(--gray-10)";
    return $checked ? "var(--green-30)" : "var(--gray-50)";
  }};
  display: flex;
  align-items: center;
  padding: 2px 4px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  position: relative;
  transition: background-color 0.2s;
  outline: none;
  &:focus {
    box-shadow: ${({ $disabled, theme }) => {
      if ($disabled) return "none";
      return theme?.mode === "dark"
        ? "0 0 0 2px var(--blue-20)"
        : "0 0 0 2px var(--blue-10)";
    }};
  }
  &:hover {
    background-color: ${({ $checked, $disabled }) => {
      if ($disabled) return "var(--gray-20)";
      return $checked ? "var(--green-40)" : "var(--gray-60)";
    }};
  }
`;

export const Thumb = styled.div<{
  $checked: boolean;
  $disabled?: boolean;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.mode === "dark"
        ? "var(--gray-50)"
        : "var(--gray-20)"
      : "var(--white)"};
  transform: ${({ $checked }) =>
    $checked ? "translateX(25px)" : "translateX(0)"};
  transition: transform 0.2s;
`;
