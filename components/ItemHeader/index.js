import styled from "styled-components";
import ItemQuote from "../ItemQuote";

const Container = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  font-size: 2.5rem;
`;

export default function ItemHeader({ title, quotes }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ItemQuote quotes={quotes}></ItemQuote>
    </Container>
  );
}