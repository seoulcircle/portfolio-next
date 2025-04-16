// Input.styles.ts
import styled from "@emotion/styled";

export const Container = styled.div<{
  disabled?: boolean;
  error?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputField = styled.input<{
  error?: boolean;
}>`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid
    ${({ error }) => (error ? "var(--red-40)" : "var(--grayscale-30)")};
  border-radius: 4px;
  background-color: var(--grayscale-10);
  color: var(--grayscale-90);
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? "var(--red-40)" : "var(--blue-30)"};
  }

  &:hover {
    border-color: ${({ error }) =>
      error ? "var(--red-40)" : "var(--blue-20)"};
  }

  &:disabled {
    background-color: var(--grayscale-20);
    color: var(--grayscale-50);
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--grayscale-50);
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--red-40);
  font-size: 12px;
  margin-top: 2px;
`;
