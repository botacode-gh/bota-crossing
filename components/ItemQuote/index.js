import styled from "styled-components";

const StyledQuote = styled.p`
  white-space: pre-wrap;
  margin: 1em 0;
  text-align: center;
`;

export default function ItemQuote({ children }) {
  return <StyledQuote>{children}</StyledQuote>;
}
