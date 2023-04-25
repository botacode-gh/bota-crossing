import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { DUMMY_FISH } from "@/lib/dummyData";

import PageHeading from "@/components/PageHeading";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import RecipesDisplay from "@/components/RecipesDisplay";

import FishDescription from "@/components/FishDescription";

import Image from "next/image";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";
import BackToMainButton from "@/components/BackToMainButton";

const StyledQuote = styled.p`
  white-space: pre-wrap;
  margin: 1em 0;
  text-align: center;
`;

export default function FishDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [randomizedQuote, setRandomizedQuote] = useState(null);

  const fish = DUMMY_FISH.find((fish) => fish.slug === slug);

  console.log("DUMMY_FISH:", DUMMY_FISH);
  console.log("fish:", fish);

  const {
    name,
    quotes,
    imageSource,
    iconSource,
    availability,
    museum,
    price,
    unlockDate,
  } = fish;
  const { displayLocation, mapSource } = museum;

  useEffect(() => {
    setRandomizedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  if (!fish) {
    return <h1>Loading fish (or trying to)...</h1>;
  }

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
