import Image from "next/image";
import { isAnimal, isVillager } from "@/lib/utils";
import ItemImage from "../ItemImage";
import AnimalPrices from "../AnimalPrices";
import AcquiredDate from "../AcquiredDate";
import Section from "../StyledSection";

export default function DescriptionBox({ children, item }) {
  return (
    <Section>
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
    </Section>
  );
}
