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

import { DUMMY_FISH } from "@/lib/dummyData";

export default function FishDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fish = DUMMY_FISH.find((fish) => fish.slug === slug);

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
