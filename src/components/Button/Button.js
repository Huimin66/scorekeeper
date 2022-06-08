import styled from "styled-components";
export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

const StyledButton = styled.button`
  color: var(--dark-purple);
  background-color: var(--color-secondary);
  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font: inherit;
  width: 90%;
  margin: 0 auto;
`;
