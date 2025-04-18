import styled from "@emotion/styled";

export const Container = styled.div<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: var(--font-size-1);
  background-color: ${({ $disabled }) =>
    $disabled ? "var(--gray-20)" : "var(--gray-10)"};
  color: ${({ $disabled }) =>
    $disabled ? "var(--gray-40)" : "var(--gray-90)"};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  outline: none;
  border: 1px solid transparent;

  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? "var(--gray-20)" : "var(--gray-30)"};
  }

  &:focus {
    border-color: var(--blue-10);
  }
`;

export const Label = styled.span`
  user-select: none;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-50);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--gray-70);
  }
`;
