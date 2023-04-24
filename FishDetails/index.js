import { useEffect, useState } from "react";
import styled from "styled-components";

import { DUMMY_FISH } from "@/lib/dummyData";

import PageHeading from "@/components/PageHeading";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import RecipesDisplay from "@/components/RecipesDisplay";

import Image from "next/image";
import FishDescription from "@/components/FishDescription";

const StyledQuote = styled.p`
  white-space: pre-wrap;
  margin: 1em 0;
  text-align: center;
`;

export default function FishDetailsPage() {
  const fish = DUMMY_FISH[0];
  const { name, quotes, imageSource, iconSource, availability, museum } = fish;
  const { month, time, rarity, location } = availability;
  const { displayLocation, mapSource } = museum;
  const [randomizedQuote, setRandomizedQuote] = useState(null);

  useEffect(() => {
    setRandomizedQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <PageHeading>{name}</PageHeading>
      <StyledQuote>{randomizedQuote || quotes[0]}</StyledQuote>
      <Image src={iconSource} alt={`${name} icon`} width={300} height={300} />
      <FishDescription fish={fish} />
      <MuseumGuidepost
        displayLocation={displayLocation}
        mapSource={mapSource}
      />
      <RecipesDisplay ingredientFilter={name} />
    </>
  );
}
