import styled from "styled-components";

export default function PageHeading({ children }) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}

const StyledPageHeading = styled.h2`
  text-align: center;
  margin: 1rem 0;
`;
