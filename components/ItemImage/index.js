import styled, { css } from "styled-components";

const StyledImage = styled.img`
  width: 100%;

  ${({ variant }) =>
    (variant === "fish" || "villager") &&
    css`
      transform: scaleX(-1);
    `};

  @media (max-width: 375px) {
    position: absolute;
    bottom: -30px;

    ${({ variant }) =>
      variant === "villager" &&
      css`
        left: -100px;
        bottom: -125px;
      `};

    ${({ variant }) =>
      variant === "bug" &&
      css`
        left: -100px;
        bottom: 30px;
      `};

    ${({ variant }) =>
      variant === "fish" &&
      css`
        left: -80px;
        bottom: 30px;
      `};

    ${({ variant }) =>
      variant === "furniture" &&
      css`
        bottom: -50px;
        left: -120px;
        scale: 0.8;
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
  console.log("item:", item);

  return (
    <StyledImage
      variant={item.type ? item.type : item}
      src={getSrc(item)}
      alt={getAlt(item)}
    />
  );
}
