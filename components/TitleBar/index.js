import styled from "styled-components";
import Link from "next/link";

const SiteTitle = styled.h1`
  color: #27a590;
  text-shadow: 2px 2px 0px #f6c564;
  padding: 20px;
  text-align: center;
`;

export default function TitleBar() {
  return (
    <header>
      <Link href={"/"}>
        <SiteTitle id="site-title">bota-crossing</SiteTitle>
      </Link>
    </header>
  );
}
