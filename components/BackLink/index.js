import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #593b23;
  align-self: flex-start;
`;

export default function BackLink() {
  return (
    <StyledLink
      href={"/"}
      passHref
      aria-label="Navigate back to Island Overview page"
    >
      &larr; back
    </StyledLink>
  );
}
