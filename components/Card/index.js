import styled, { css } from "styled-components";
import Link from "next/link";

export default function Card({ name, type, iconSource, variant }) {
  const urlScheme = `${TYPE_URLS[type]}/${name}`;

  return (
    <Link href={urlScheme} passHref legacyBehavior>
      <StyledArticle variant={variant}>
        {name}
        <IconContainer>
          {iconSource ? (
            <Icon
              variant={type}
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
  right: 5px;
  bottom: 0;
`;

const Icon = styled.img`
  object-fit: contain;

  ${({ variant }) =>
    variant === "villager" &&
    css`
      transform: scaleX(-1);
      right: 5px;
      bottom: -35px;
      height: auto;
    `};
`;

const TYPE_URLS = {
  fish: "fish",
  bug: "bugs",
  furniture: "furniture",
  clothing: "clothing",
  recipe: "recipes",
  villager: "villagers",
};
