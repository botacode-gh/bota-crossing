import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import PageHeading from "@/components/PageHeading";
import FishDescription from "@/components/FishDescription";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import RecipesDisplay from "@/components/RecipesDisplay";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";
import BackToMainButton from "@/components/BackToMainButton";

import { DUMMY_FISH } from "@/lib/dummyData";

const StyledQuote = styled.p`
  white-space: pre-wrap;
  margin: 1em 0;
  text-align: center;
`;

export default function FishDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const fish = DUMMY_FISH.find((fish) => fish.slug === slug);

  "DUMMY_FISH:", DUMMY_FISH;
  "fish:", fish;

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
      <StyledQuote>{randomizedQuote || quotes[0]}</StyledQuote>
      <FishDescription fish={fish} />
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
