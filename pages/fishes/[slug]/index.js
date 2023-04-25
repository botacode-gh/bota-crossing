import { useRouter } from "next/router";

import PageHeading from "@/components/PageHeading";

import AnimalDescription from "@/components/AnimalDescription";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import RecipesDisplay from "@/components/RecipesDisplay";
import Image from "next/image";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";
import BackToMainButton from "@/components/BackToMainButton";

import { DUMMY_FISH } from "@/lib/dummyData";
import ItemQuote from "@/components/ItemQuote";

export default function FishDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fish = DUMMY_FISH.find((fish) => fish.slug === slug);

  console.log("DUMMY_FISH:", DUMMY_FISH);
  console.log("fish:", fish);

  if (!fish) {
    return <h1>Loading fish (or trying to)...</h1>;
  }

  const { name, quotes, iconSource, museum, price, unlockDate } = fish;
  const { displayLocation, mapSource } = museum;
  const randomizedQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <ItemQuote>{randomizedQuote || quotes[0]}</ItemQuote>
      <AnimalDescription species={fish} />
      <Image src={iconSource} alt={`${name} icon`} width={300} height={300} />
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
