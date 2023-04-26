import { useRouter } from "next/router";
import Image from "next/image";

import { DUMMY_FURNITURES } from "@/lib/dummyData";
import VariantsDisplay from "@/components/VariantsDisplay";
import PageHeading from "@/components/PageHeading";
import BackToMainButton from "@/components/BackToMainButton";
import TagsContainer from "@/components/TagsContainer";
import PriceDisplay from "@/components/PriceDisplay";
import UnlockDate from "@/components/UnlockDate";

export default function FurnitureDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const furniture = DUMMY_FURNITURES.find(
    (furniture) => furniture.slug === slug
  );

  if (!furniture) {
    return <h1>Loading furniture (or trying to)...</h1>;
  }

  const { name, imageSource, price, unlockDate } = furniture;

  return (
    <>
      <BackToMainButton />
      <PageHeading>{name}</PageHeading>
      <TagsContainer furniture={furniture} />
      <Image src={imageSource} alt={`${name} icon`} width={300} height={300} />
      <PriceDisplay price={price} />
      <VariantsDisplay furniture={furniture} />
      <UnlockDate date={unlockDate} type="furniture" />
    </>
  );
}
