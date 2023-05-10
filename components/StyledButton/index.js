import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  color: black;
  background-color: #f6c564;
  border-radius: 100px;
  padding: 0.5rem 1.2rem;
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
