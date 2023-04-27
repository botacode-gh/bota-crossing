import styled from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  cursor: pointer;
`;

const Category = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
`;

const CATEGORY_URLS = {
  fish: "fishes",
  bug: "bugs",
  furniture: "furnitures",
  clothing: "clothing",
  recipe: "recipes",
  resident: "residents",
};

export default function Card({ name, category, slug }) {
  const urlScheme = `${CATEGORY_URLS[category]}/${slug}`;

  return (
    <Link href={urlScheme} passHref legacyBehavior>
      <StyledArticle>
        {name}
        <Category>{category}</Category>
        {/* <Anchor /> */}
      </StyledArticle>
    </Link>
  );
}
