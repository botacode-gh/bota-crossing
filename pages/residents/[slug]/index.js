import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import BackToMainButton from "@/components/BackToMainButton";
import ItemQuote from "@/components/ItemQuote";
import PageHeading from "@/components/PageHeading";

import { DUMMY_RESIDENTS } from "@/lib/dummyData";
import UnlockDate from "@/components/UnlockDate";
import ResidentDescription from "@/components/ResidentDescription";

// it's dummy because I'll make a user story later to make this a global component
const DummyCenteredImage = styled(Image)`
  justify-self: center;
`;

export default function ResidentDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const resident = DUMMY_RESIDENTS.find((resident) => resident.slug === slug);

  if (!resident) {
    return <h1>Loading resident (or trying to)...</h1>;
  }

  const { name, saying, imageSource, unlockDate, type } = resident;

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <ItemQuote>{saying}</ItemQuote>
      <ResidentDescription resident={resident} />
      <DummyCenteredImage
        src={imageSource}
        alt={`${name} image`}
        width={300}
        height={300}
      />
      <UnlockDate date={unlockDate} type={type} />
    </>
  );
}
