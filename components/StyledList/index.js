import styled, { css } from "styled-components";

const StyledList = styled.ul`
  opacity: 80%;
  list-style: none;
  padding-left: 0;

  &:hover {
    opacity: 100%;
  }

  ${({ variant }) =>
    variant === "tags" &&
    css`
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;
      gap: 1rem;
      row-gap: 0;
    `}
`;

export default StyledList;
