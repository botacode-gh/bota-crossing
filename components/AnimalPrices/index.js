import Image from "next/image";
import styled from "styled-components";

import { formatPrice } from "@/lib/utils";
import StyledPrice from "../StyledPrice";

const StyledPriceDisplay = styled.article`
  text-align: right;
  width: fit-content;
  padding: 1rem;
  align-self: flex-end;
  font-size: 0.8em;
  margin-top: -1rem;
  position: absolute;
  right: 1rem;
  bottom: 30px;
`;

const PriceList = styled.ul`
  list-style: none;
  margin: 0;
`;

export default function AnimalPrices({ nook, cj, flick }) {
  console.log("nook:", nook);
  console.log("cj:", cj);
  console.log("flick:", flick);
  return (
    <StyledPriceDisplay>
      <Image
        src="https://dodo.ac/np/images/1/1e/99k_Bells_NH_Inv_Icon.png"
        alt="Icon of Bells"
        width={50}
        height={50}
      />
      <PriceList>
        {nook && (
          <li>
            Nook&apos;s: <StyledPrice>{nook}</StyledPrice>
          </li>
        )}
        {cj && (
          <li>
            CJ: <StyledPrice>{cj}</StyledPrice>
          </li>
        )}
        {flick && (
          <li>
            Flick: <StyledPrice>{flick}</StyledPrice>
          </li>
        )}
      </PriceList>
    </StyledPriceDisplay>
  );
}
