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

export const InputContainer = styled.div`
  position: relative;
`;

export const InputField = styled.input<{ error?: boolean }>`
  width: 288px;
  padding: 12px 16px;
  font-size: 14px;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.2s ease;
  outline: none;

  border: none;
  border-bottom: ${({ error }) =>
    error ? "1px solid var(--red-30)" : "1px solid var(--gray-40)"};

  &::placeholder {
    color: var(--gray-40);
  }

  &:hover {
    border-bottom: ${({ error }) =>
      error ? "1px solid var(--red-30)" : "1px solid var(--blue-30)"};
  }

  &:focus {
    border: ${({ error }) =>
      error ? "1px solid var(--red-30)" : "1px solid var(--blue-30)"};

    padding: 12px 16px;
  }

  ${({ error }) =>
    error &&
    `
    border: 1px solid var(--red-30);
  `}

  &:disabled {
    color: var(--gray-40);
    border: none;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  left: 280px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-50);
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--red-30);
  font-size: 12px;
  margin-top: 2px;
`;

export const LabelMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-text);
  font-size: 12px;
  margin-top: 2px;
`;
