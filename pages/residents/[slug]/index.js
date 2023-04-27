import Image from "next/image";
import { useRouter } from "next/router";

import BackToMainButton from "@/components/BackToMainButton";
import ItemQuote from "@/components/ItemQuote";
import PageHeading from "@/components/PageHeading";

import { DUMMY_RESIDENTS } from "@/lib/dummyData";
import UnlockDate from "@/components/UnlockDate";

export default function ResidentDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const resident = DUMMY_RESIDENTS.find((resident) => resident.slug === slug);

  console.log("resident:", resident);

  if (!resident) {
    return <h1>Loading resident (or trying to)...</h1>;
  }

  const {
    name,
    saying,
    personality,
    species,
    hobby,
    catchphrase,
    birthday,
    iconSource,
    imageSource,
    unlockDate,
    type,
  } = resident;

  const article = /[aeiou]/i.test(personality[0]) ? "An" : "A";
  const descriptionText = `
    ${article} ${personality} ${species}, likes to ${hobby} and say "${catchphrase}" a lot.
  `;

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <ItemQuote>{saying}</ItemQuote>
      <div>
        <p>{descriptionText}</p>
        <p>Birthday: {birthday}</p>
        <Image src={iconSource} alt={`${name} icon`} width={100} height={100} />
      </div>
      <Image src={imageSource} alt={`${name} image`} width={300} height={300} />
      <UnlockDate date={unlockDate} type={type} />
    </>
  );
}
