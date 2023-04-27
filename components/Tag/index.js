import styled, { css } from "styled-components";

const StyledTag = styled.div`
  border: 1px dashed black;
  width: fit-content;

  ${({ variant }) =>
    variant === "isFalse" &&
    css`
      border-color: red;
      color: red;
    `}

  ${({ variant }) =>
    variant === "isTrue" &&
    css`
      border-color: green;
      color: green;
    `}
`;

export default function Tag({ text }) {
  const tagVariant = text.includes("❌")
    ? "isFalse"
    : text.includes("✔")
    ? "isTrue"
    : "";

  return <StyledTag variant={tagVariant}>{text}</StyledTag>;
}
