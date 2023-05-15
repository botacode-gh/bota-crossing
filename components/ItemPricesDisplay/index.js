import { formatPrice } from "@/lib/utils";
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

const H4 = styled.h4`
  margin: 1rem 0;
`;

export default function ItemPricesDisplay({ item }) {
  return (
    <StyledPriceDisplay>
      {item.buy && (
        <div>
          <H4>Buy</H4>
          <div>
            {item.buy.map((store) => {
              return (
                <PriceList key={store.price}>
                  <PriceListItem>
                    {store.currency === "Poki" ? "Wardell" : "Nook's"}:
                    <StyledPrice>{store.price}</StyledPrice>
                    <CurrencyIcon currency={store.currency} />
                  </PriceListItem>
                </PriceList>
              );
            })}
          </div>
        </div>
      )}
      <div>
        <H4>Sell</H4>
        <div>
          <PriceListItem>
            <StyledPrice>{item.sell}</StyledPrice>{" "}
            <CurrencyIcon currency="Bells" />
          </PriceListItem>
        </div>
      </div>
    </StyledPriceDisplay>
  );
}
