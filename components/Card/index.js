import styled from "styled-components";
import Image from "next/image";
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

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -1;
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

export default function Card({ name, type, slug, iconSource }) {
  const urlScheme = `${TYPE_URLS[type]}/${slug}`;

  return (
    <Link href={urlScheme} passHref legacyBehavior>
      <StyledArticle>
        {name}
        <IconContainer>
          {iconSource ? (
            <Image
              src={iconSource}
              alt={`${name} icon`}
              width={50}
              height={50}
            />
          ) : (
            type
          )}
        </IconContainer>
      </StyledArticle>
    </Link>
  );
}
