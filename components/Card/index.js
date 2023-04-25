import styled from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
`;

const Category = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
  }
`;

export default function Card({ name, category, slug }) {
  const urlScheme =
    category === "fish"
      ? `fishes/${slug}`
      : category === "bug"
      ? `bugs/${slug}`
      : category === "furniture"
      ? `furnitures/${slug}`
      : category === "clothing"
      ? `clothing/${slug}`
      : category === "recipe"
      ? `recipes/${slug}`
      : category === "resident"
      ? `residents/${slug}`
      : null;

  return (
    <StyledArticle>
      {name}
      <Category>{category}</Category>
      <Link href={urlScheme} passHref legacyBehavior>
        <Anchor />
      </Link>
    </StyledArticle>
  );
}
