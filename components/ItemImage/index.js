import { getImgAlt, getImgSrc } from "@/lib/utils";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 228px;
  max-width: 500px;
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
      top: 230px;
      left: -110px;
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

export default function ItemImage({ item }) {
  const variant = item.type;
  return (
    <Container variant={variant}>
      <StyledImage
        variant={variant}
        src={getImgSrc(item)}
        alt={getImgAlt(item)}
      />
    </Container>
  );
}
