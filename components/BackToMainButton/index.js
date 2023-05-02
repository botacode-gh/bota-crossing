import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  text-decoration: none;
`;

export default function BackToMainButton() {
  return (
    <Link
      href={"/"}
      passHref
      legacyBehavior
      aria-label="Navigate back to Island Overview page"
    >
      <StyledLink>&larr; to island overview</StyledLink>
    </Link>
  );
}
