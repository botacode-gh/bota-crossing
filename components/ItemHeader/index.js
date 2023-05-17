import styled from "styled-components";
import ItemQuote from "../ItemQuote";
import { getTitle } from "@/lib/utils";

const Container = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-evenly;
  align-items: baseline;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

export default function ItemHeader({ title, quotes }) {
  const itemTitle = getTitle(title);

  return (
    <Container>
      <Title>{itemTitle}</Title>
      <ItemQuote quotes={quotes}></ItemQuote>
    </Container>
  );
}
