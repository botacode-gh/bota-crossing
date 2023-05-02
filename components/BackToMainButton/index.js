import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function BackToMainButton() {
  return (
    <StyledLink
      href={"/"}
      passHref
      aria-label="Navigate back to Island Overview page"
    >
      &larr; to island overview
    </StyledLink>
  );
}
