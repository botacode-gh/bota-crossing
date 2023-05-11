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

export default function ItemImage({ item }) {
  const src = item.variations
    ? item.variations[0].image_url
    : item.render_url
    ? item.render_url
    : item.image_url;

  const alt =
    item.variations && item.variations[0].variation.length > 0
      ? item.variations[0].variation
      : item.name;

  return <StyledImage variant={item.type} src={src} alt={alt} />;
}
