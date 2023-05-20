import styled, { css } from "styled-components";
import { getQuote, getTitle } from "@/lib/utils";
import ItemQuote from "../ItemQuote";

export default function ItemHeader({ item }) {
  const itemName = getTitle(item.name);
  const quotes = getQuote(item);

  return (
    <Container variant={item.type}>
      <Title>{itemName}</Title>
      <ItemQuote quotes={quotes}></ItemQuote>
    </Container>
  );
}

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
