import styled, { css } from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background-color: #f6c564;
  border-radius: 100px;
  padding: 0.5rem 1.2rem;
  box-shadow: 0px 1px 1.5px 1px rgba(92, 22, 0, 0.29);
  opacity: 80%;

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #ffe2a9;
    box-shadow: inset 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
    opacity: 1;
  }

  ${({ variant }) =>
    variant === "remove" &&
    css`
        background-color: #ff977a;
        color: white;
  
        &:hover, :focus {
          background-color: #ffc2b1;
      `}
`;

export default function Button({ children, onClick, variant }) {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
}
