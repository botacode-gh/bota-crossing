import styled, { css } from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background-color: #f6c564;
  border-radius: 100px;
  padding: 0.5rem 1.2rem;
  box-shadow: 0px 1px 1.5px 1px rgba(92, 22, 0, 0.29);
  max-width: 95px;
  min-height: 30px;

  &:hover,
  &:focus {
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
  
        &:hover {
          background-color: #ffc2b1;
      `}

  ${({ variant }) =>
    variant === "suggested" &&
    css`
        background-color: #27a590;
        color: white;

        &:hover {
          background-color: #27a59070;
      `}
`;

export default function Button({ children, onClick, variant, type }) {
  return (
    <StyledButton onClick={onClick} variant={variant} type={type}>
      {children}
    </StyledButton>
  );
}
