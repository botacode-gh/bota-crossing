import styled, { css } from "styled-components";
import ItemQuote from "../ItemQuote";
import { getItemName, getQuote, getTitle } from "@/lib/utils";

const Container = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-evenly;
  align-items: baseline;
  position: relative;

  ${({ variant }) =>
    variant === "furniture" &&
    css`
      justify-content: flex-start;
    `}
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

export default function ItemHeader({ item }) {
  const itemName = getItemName(item);
  const itemTitle = getTitle(itemName);
  const quotes = getQuote(item);

  return (
    <Container variant={item.type}>
      <Title>{itemTitle}</Title>
      <ItemQuote quotes={quotes}></ItemQuote>
    </Container>
  );
}
