import styled from "@emotion/styled";

export const Label = styled.label<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-1);
  color: ${({ $disabled }) =>
    $disabled ? "var(--gray-40)" : "var(--color-text)"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Box = styled.span<{
  $checked: boolean;
  $disabled?: boolean;
  $focused?: boolean;
  theme?: { mode?: "light" | "dark" };
}>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease;

  background-color: ${({ $checked, $disabled, theme }) => {
    // 체크 + 비활성화
    if ($checked && $disabled) {
      return theme?.mode === "dark" ? "var(--blue-40)" : "var(--blue-20)";
    }
    // 체크
    if ($checked) {
      return "var(--blue-30)";
    }
    return "transparent";
  }};

  border: 1.5px solid
    ${({ $checked, $disabled, theme }) => {
      if ($checked && $disabled) {
        return theme?.mode === "dark" ? "var(--blue-40)" : "var(--blue-10)";
      }
      if ($checked) return "var(--blue-30)";
      if ($disabled) return "var(--gray-20)";
      return "var(--color-text)";
    }};

  ${({ $focused, $disabled, theme }) =>
    $focused && !$disabled
      ? `outline: 2px solid ${
          theme?.mode === "dark" ? "var(--blue-20)" : "var(--blue-10)"
        }; outline-offset: 2px;`
      : ""}
`;

export const CheckMark = styled.svg<{
  theme?: { mode?: "light" | "dark" };
}>`
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) =>
    theme?.mode === "dark" ? "var(--gray-90)" : "var(--white)"};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

export const Text = styled.span`
  user-select: none;
`;
