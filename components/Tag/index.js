import styled, { css } from "styled-components";

const StyledTag = styled.div`
  border: 2px dashed black;
  border-radius: 5px;
  height: 2rem;
  padding: 0.5rem 0.5rem 2rem 0.5rem;

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
    `};
`;

export default function Tag({ text }) {
  const tagVariant = text.includes("❌")
    ? "isFalse"
    : text.includes("✔")
    ? "isTrue"
    : "";

  return <StyledTag variant={tagVariant}>{text}</StyledTag>;
}
