import styled from "styled-components";
import StyledPrice from "../StyledPrice";
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
      {item.buy && (
        <>
          <Subtitle>Buy</Subtitle>
          <PriceList>
            {item.buy.map((store) => {
              return (
                <PriceListItem key={store.price}>
                  {store.currency === "Poki" ? "Wardell" : "Nook's"}:
                  <StyledPrice>{store.price}</StyledPrice>
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
            <StyledPrice>{item.sell}</StyledPrice>
            <CurrencyIcon currency="Bells" />
          </PriceListItem>
        </PriceList>
      </div>
    </StyledPriceDisplay>
  );
}
