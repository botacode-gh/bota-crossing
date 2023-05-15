import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 228px;
  position: absolute;
  left: -80px;
  bottom: -220px;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  ${({ variant }) =>
    (variant === "villager" || "bug") &&
    css`
      left: -130px;
    `};

  ${({ variant }) =>
    variant === "bug" &&
    css`
      bottom: -220px;
      scale: 1.2;
    `};

  ${({ variant }) =>
    variant === "villager" &&
    css`
      scale: 0.8;
      bottom: -200px;
    `};

  ${({ variant }) =>
    variant === "fish" &&
    css`
      left: -100px;
    `};

  ${({ variant }) =>
    variant === "furniture" &&
    css`
      bottom: 100px;
    `};
`;

const StyledImage = styled.img`
  width: 100%;

  ${({ variant }) =>
    variant === "fish" &&
    css`
      transform: scaleX(-1);
    `};

  ${({ variant }) =>
    (variant === "fish" || "villager") &&
    css`
      rotate: 15deg;
    `};
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
  const variant = item.type;
  return (
    <Container variant={variant}>
      <StyledImage variant={variant} src={getSrc(item)} alt={getAlt(item)} />
    </Container>
  );
}
