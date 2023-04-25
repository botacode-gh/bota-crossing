import Image from "next/image";
import { useRouter } from "next/router";

import PageHeading from "@/components/PageHeading";
import ItemQuote from "@/components/ItemQuote";
import AnimalDescription from "@/components/AnimalDescription";
import MuseumGuidepost from "@/components/MuseumGuidepost";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";
import BackToMainButton from "@/components/BackToMainButton";

import { DUMMY_BUGS } from "@/lib/dummyData";
import ModelMade from "@/components/ModelMade";

export default function BugDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const bug = DUMMY_BUGS.find((bug) => bug.slug === slug);

  if (!bug) {
    return <h1>Loading bug (or trying to)...</h1>;
  }

  const { name, quotes, iconSource, museum, price, unlockDate } = bug;
  const { displayLocation, mapSource } = museum;
  const randomizedQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <ItemQuote>{randomizedQuote || quotes[0]}</ItemQuote>
      <AnimalDescription species={bug} />
      <Image src={iconSource} alt={`${name} icon`} width={300} height={300} />
      <PriceDisplay price={price} />
      <ModelMade />
      <MuseumGuidepost
        displayLocation={displayLocation}
        mapSource={mapSource}
      />
      <UnlockDate date={unlockDate} type="fish" />
    </>
  );
}
