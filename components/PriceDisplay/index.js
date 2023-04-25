import styled from "styled-components";

const StyledPriceDisplay = styled.div`
  text-align: right;
`;

const PriceList = styled.ul`
  list-style: none;
`;

export default function PriceDisplay({ price }) {
  return (
    <StyledPriceDisplay>
      {price.map((priceTuple) => {
        return (
          <PriceList key={priceTuple[0]}>
            <li>
              {priceTuple[0]}: {priceTuple[1]} Bells
            </li>
          </PriceList>
        );
      })}
    </StyledPriceDisplay>
  );
}
