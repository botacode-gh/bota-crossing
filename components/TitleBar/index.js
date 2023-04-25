import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Headline = styled.h1`
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  color: #000;
  text-align: center;
`;

export default function TitleBar() {
  return (
    <StyledLink href={"/"}>
      <Headline>🏝️ bota-crossing</Headline>
    </StyledLink>
  );
}
