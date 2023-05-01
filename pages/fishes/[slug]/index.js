import Image from "next/image";
import { useRouter } from "next/router";

import PageHeading from "@/components/PageHeading";
import ItemQuote from "@/components/ItemQuote";
import AnimalDescription from "@/components/AnimalDescription";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import RecipesDisplay from "@/components/RecipesDisplay";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";
import BackToMainButton from "@/components/BackToMainButton";

import { getRandom } from "@/lib/utils";
import { DUMMY_ITEMS } from "@/lib/dummyData";

const FISHES = DUMMY_ITEMS.filter((item) => item.type === "fish");

export default function FishDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fish = FISHES.find((fish) => fish.slug === slug);
  const userItems =
    typeof window !== "undefined" && localStorage.getItem("userItems");
  console.log("userItems:", userItems);

  if (!fish) {
    return <h1>Loading fish (or trying to)...</h1>;
  }

  const { name, quotes, iconSource, museum, price, unlockDate } = fish;
  const { displayLocation, mapSource } = museum;

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <ItemQuote>{getRandom(quotes)}</ItemQuote>
      <AnimalDescription animal={fish} />
      <Image src={iconSource} alt={`${name} icon`} width={150} height={150} />
      <PriceDisplay price={price} />
      <MuseumGuidepost
        displayLocation={displayLocation}
        mapSource={mapSource}
      />
      <RecipesDisplay ingredientFilter={name} />
      <UnlockDate date={unlockDate} type="fish" />
    </>
  );
}
