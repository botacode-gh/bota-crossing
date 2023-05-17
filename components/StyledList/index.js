import styled, { css } from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

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
