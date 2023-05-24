import styled, { css } from "styled-components";

export default function Section({ children, variant }) {
  return <StyledSection variant={variant}>{children}</StyledSection>;
}

const StyledSection = styled.section`
  border-radius: 30px;
  display: flex;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
  position: relative;
  width: 100%;

  p {
    align-self: center;
    margin: 0.8rem 0;
  }

  ${({ variant }) =>
    variant === "ModelMade" &&
    css`
      padding-right: 2rem;
      justify-content: space-between;
      width: 50%;
      align-self: flex-end;
    `}
`;
