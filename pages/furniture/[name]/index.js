import { useRouter } from "next/router";

import furnitureData from "@/lib/apiData/furniture.json";
import PageHeading from "@/components/PageHeading";
import TagsContainer from "@/components/TagsContainer";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import ItemPricesDisplay from "@/components/ItemPricesDisplay";
import AcquiredDate from "@/components/AcquiredDate";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";

export default function FurnitureDetails({ acquiredItems, isRemoveModalOpen }) {
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
      {isRemoveModalOpen && (
        <RemoveModal item={acquiredFurniture} acquiredItems={acquiredItems} />
      )}
      <ActionsBar item={furniture} acquiredItem={acquiredFurniture} />
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
