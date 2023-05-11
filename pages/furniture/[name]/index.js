import { useRouter } from "next/router";

import PageHeading from "@/components/PageHeading";
import BackLink from "@/components/BackLink";
import TagsContainer from "@/components/TagsContainer";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import ItemPricesDisplay from "@/components/ItemPricesDisplay";

import furnitureData from "@/lib/apiData/furniture.json";

export default function FurnitureDetails({ acquiredItems }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <PageHeading>visiting ikea...</PageHeading>;
  }

  const furniture = furnitureData.find(
    (furniture) => furniture.name.toLowerCase() === name.toLowerCase()
  );

  if (!furniture) {
    return <h1>Loading furniture (or trying to)...</h1>;
  }

  const { name: furnitureName, imageSource, price, unlockDate } = furniture;

  return (
    <>
      <BackLink />
      <ItemHeader title={furnitureName} />
      <TagsContainer furniture={furniture} />
      <ItemImage item={furniture} />
      <ItemPricesDisplay item={furniture} />
    </>
  );
}
