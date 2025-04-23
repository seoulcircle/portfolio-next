/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Title = styled.p`
  font-size: var(--font-size-5);
`;
const Text = styled.p`
  font-size: var(--font-size-4);
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin: 20px;
`;
const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const ToggleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
  align-items: center;
  & span {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-bold);
  }
`;

const S = {
  Title,
  Text,
  ButtonWrapper,
  TagWrapper,
  ToggleWrapper,
};

export default S;
