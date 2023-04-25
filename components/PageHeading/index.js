import styled from "styled-components";

const StyledPageHeading = styled.h2`
  text-align: center;
`;

export default function PageHeading({ children }) {
  return <StyledPageHeading>{children}</StyledPageHeading>;
}
