import styled from "styled-components";

const StyledPriceDisplay = styled.article`
  text-align: right;
`;

const PriceList = styled.ul`
  list-style: none;
`;

export default function PriceDisplay({ price }) {
  return (
    <StyledPriceDisplay>
      {price.buy && (
        <div>
          <h4>Buy</h4>
          <div>
            {price.buy.map((priceTuple) => {
              return (
                <PriceList key={priceTuple[0]}>
                  <li>
                    {priceTuple[0]}: {priceTuple[1]} Bells
                  </li>
                </PriceList>
              );
            })}
          </div>
        </div>
      )}
      <div>
        <h4>Sell</h4>
        <div>
          {price.sell.map((priceTuple) => {
            return (
              <PriceList key={priceTuple[0]}>
                <li>
                  {priceTuple[0]}: {priceTuple[1]} Bells
                </li>
              </PriceList>
            );
          })}
        </div>
      </div>
    </StyledPriceDisplay>
  );
}
