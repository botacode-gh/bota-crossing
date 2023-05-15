import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Headline = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  color: #27a590;
  text-shadow: 2px 2px 0px #f6c564;
`;

export default function TitleBar() {
  return (
    <header>
      <StyledLink href={"/"}>
        <Headline>
          <Heading id="site-heading">bota-crossing</Heading>
        </Headline>
      </StyledLink>
    </header>
  );
}
