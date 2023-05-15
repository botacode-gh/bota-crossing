import styled from "styled-components";

const StyledPageHeading = styled.h2`
  text-align: center;
  margin: 1rem 0;
`;

export default function PageHeading({ children }) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}
