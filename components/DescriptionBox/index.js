import styled from "styled-components";
import Image from "next/image";
import ItemImage from "../ItemImage";
import AnimalPrices from "../AnimalPrices";
import AcquiredDate from "../AcquiredDate";
import { isAnimal, isVillager } from "@/lib/utils";

export default function DescriptionBox({ children, item }) {
  return (
    <StyledSection>
      {children}
      {!isVillager(item) && (
        <Image src={item.image_url} alt={"icon"} width={100} height={100} />
      )}
      {isAnimal(item) && (
        <AnimalPrices
          nook={item.sell_nook}
          cj={item.sell_cj}
          flick={item.sell_flick}
        />
      )}
      <ItemImage item={item} />
      <AcquiredDate item={item} />
    </StyledSection>
  );
}

const StyledSection = styled.section`
  border-radius: 30px;
  display: flex;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
  position: relative;
  width: 100%;

  p {
    align-self: center;
    margin: 0.8rem 0;
  }
`;
