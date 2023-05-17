import styled from "styled-components";
import Price from "../Price";
import CurrencyIcon from "../CurrencyIcon";

const StyledPriceDisplay = styled.article`
  text-align: right;
  width: 100%;
  z-index: 1;
`;

const PriceList = styled.ul`
  list-style: none;
  margin: -8px 0 0;
`;

const PriceListItem = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
`;

const Subtitle = styled.h4`
  margin: 1rem 0;
`;

export default function ItemPricesDisplay({ item }) {
  return (
    <StyledPriceDisplay>
      {item.buy.length > 0 && (
        <>
          <Subtitle>Buy</Subtitle>
          <PriceList>
            {item.buy.map((store) => {
              return (
                <PriceListItem key={store.price}>
                  {store.currency === "Poki" ? "Wardell" : "Nook's"}:
                  <Price>{store.price}</Price>
                  <CurrencyIcon currency={store.currency} />
                </PriceListItem>
              );
            })}
          </PriceList>
        </>
      )}
      <div>
        <Subtitle>Sell</Subtitle>
        <PriceList>
          <PriceListItem>
            <Price>{item.sell}</Price>
            <CurrencyIcon currency="Bells" />
          </PriceListItem>
        </PriceList>
      </div>
    </StyledPriceDisplay>
  );
}
