import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledArticle = styled.article`
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  height: 6rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);

  ${({ variant }) =>
    variant === "fishTank" &&
    css`
      width: 100%;
    `};
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 5px;
`;

const TYPE_URLS = {
  fish: "fish",
  bug: "bugs",
  furniture: "furniture",
  clothing: "clothing",
  recipe: "recipes",
  villager: "villagers",
};

export default function Card({ name, type, iconSource, variant }) {
  const urlScheme = `${TYPE_URLS[type]}/${name}`;

  return (
    <Link href={urlScheme} passHref legacyBehavior>
      <StyledArticle variant={variant}>
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
