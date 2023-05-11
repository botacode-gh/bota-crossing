import { useRouter } from "next/router";

import BackLink from "@/components/BackLink";
import PageHeading from "@/components/PageHeading";
import TagsContainer from "@/components/TagsContainer";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import ItemPricesDisplay from "@/components/ItemPricesDisplay";

import furnitureData from "@/lib/apiData/furniture.json";
import AcquiredDate from "@/components/AcquiredDate";

export default function FurnitureDetails({ acquiredItems }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <PageHeading>visiting ikea...</PageHeading>;
  }

  const furniture = furnitureData.find(
    (furniture) => furniture.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredFurniture = acquiredItems.find(
    (item) => item.name === furniture.name
  );

  return (
    <>
      <BackLink />
      <ItemHeader title={furniture.name} />
      <TagsContainer furniture={furniture} />
      <ItemImage item={furniture} />
      <ItemPricesDisplay item={furniture} />
      <AcquiredDate
        date={acquiredFurniture ? acquiredFurniture.acquireDate : null}
        type="furniture"
      />
    </>
  );
}
