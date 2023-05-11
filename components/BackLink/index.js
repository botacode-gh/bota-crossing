import styled from "styled-components";
import Link from "next/link";
import Button from "../StyledButton";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #593b23;
  align-self: flex-start;
`;

export default function BackLink() {
  return (
    <StyledLink href={"/"} aria-label="Navigate back to Island Overview page">
      <Button>&larr; back</Button>
    </StyledLink>
  );
}
