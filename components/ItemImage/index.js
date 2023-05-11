import styled, { css } from "styled-components";

const StyledImage = styled.img`
  width: 100%;

  @media (max-width: 533px) {
    position: absolute;
    bottom: -30px;

    ${({ variant }) =>
      variant === "villager" &&
      css`
        left: -100px;
        bottom: -100px;
      `};

    ${({ variant }) =>
      variant === "bug" &&
      css`
        left: -100px;
        bottom: 60px;
      `};

    ${({ variant }) =>
      variant === "fish" &&
      css`
        left: -80px;
        bottom: 80px;
        transform: scaleX(-1);
      `};

    ${({ variant }) =>
      variant === "furniture" &&
      css`
        left: -100px;
        transform: scaleX(-1);
      `}
  }
`;

function getSrc(item) {
  if (item.variations) {
    return item.variations[0].image_url;
  }

  if (item.render_url) {
    return item.render_url;
  }

  return item.image_url;
}

function getAlt(item) {
  if (item.variations && item.variations[0].variation.length > 0) {
    return item.variations[0].variation;
  }

  return item.name;
}

export default function ItemImage({ item }) {
  return (
    <StyledImage variant={item.type} src={getSrc(item)} alt={getAlt(item)} />
  );
}
