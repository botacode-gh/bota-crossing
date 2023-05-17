import styled, { css } from "styled-components";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import { getTagVariant } from "@/lib/utils";

const StyledTag = styled.div`
  border: 2px dashed black;
  border-radius: 15px;
  height: 2rem;
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  opacity: 70%;

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

export default function Tags({ furniture }) {
  if (!furniture) {
    return <h1>Loading tags (or trying to)...</h1>;
  }

  const { category, tag, customizable } = furniture;

  const tags = [
    category.toLowerCase(),
    tag.toLowerCase(),
    `${customizable ? "✔" : "❌"} customizable`,
  ];

  return (
    <>
      <StyledList variant="tags">
        {tags.map((tag) => {
          return (
            <StyledListItem key={tag}>
              <StyledTag variant={getTagVariant(tag)}>{tag}</StyledTag>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
}
