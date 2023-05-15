import styled from "styled-components";
import ItemQuote from "../ItemQuote";

const Container = styled.div`
  display: flex;

  width: 100%;
  justify-content: space-evenly;
  align-items: baseline;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

export default function ItemHeader({ title, quotes }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ItemQuote quotes={quotes}></ItemQuote>
    </Container>
  );
}
