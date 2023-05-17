import styled from "styled-components";
import Image from "next/image";
import Price from "../Price";

const StyledPriceDisplay = styled.article`
  text-align: right;
  width: fit-content;
  align-self: flex-end;
  font-size: 0.8em;
  margin-top: -1rem;
  position: absolute;
  right: 0;
  bottom: -120px;
`;

const BellsIcon = styled(Image)`
  right: -10px;
  bottom: 30px;
`;

const PriceList = styled.ul`
  list-style: none;
  margin: 0;
`;

export default function AnimalPrices({ nook, cj, flick }) {
  return (
    <StyledPriceDisplay>
      <BellsIcon
        src="https://dodo.ac/np/images/1/1e/99k_Bells_NH_Inv_Icon.png"
        alt="Icon of Bells"
        width={50}
        height={50}
      />
      <PriceList>
        {cj && (
          <li>
            CJ: <Price>{cj}</Price>
          </li>
        )}
        {flick && (
          <li>
            Flick: <Price>{flick}</Price>
          </li>
        )}
        {nook && (
          <li>
            Nook&apos;s: <Price>{nook}</Price>
          </li>
        )}
      </PriceList>
    </StyledPriceDisplay>
  );
}
