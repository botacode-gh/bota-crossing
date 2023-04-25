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
  text-
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
  const CATEGORY_URLS = {
    fish: "fishes",
    bug: "bugs",
    furniture: "furnitures",
    clothing: "clothing",
    recipe: "recipes",
    resident: "residents",
  };
  const urlScheme = `${CATEGORY_URLS[category]}/${slug}`;

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
