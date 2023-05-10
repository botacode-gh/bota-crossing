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
  color: #27a590;
  text-align: center;
  text-shadow: 2px 2px 0px #f6c564;
`;

export default function TitleBar() {
  return (
    <header>
      <StyledLink href={"/"}>
        <Headline>bota-crossing</Headline>
      </StyledLink>
    </header>
  );
}
