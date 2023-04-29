import styled from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  height: 6rem;
  width: 8rem;
`;

const Type = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
`;

const TYPE_URLS = {
  fish: "fishes",
  bug: "bugs",
  furniture: "furnitures",
  clothing: "clothing",
  recipe: "recipes",
  resident: "residents",
};

export default function Card({ name, type, slug }) {
  const urlScheme = `${TYPE_URLS[type]}/${slug}`;

  return (
    <Link href={urlScheme} passHref legacyBehavior>
      <StyledArticle>
        {name}
        <Type>{type}</Type>
      </StyledArticle>
    </Link>
  );
}
