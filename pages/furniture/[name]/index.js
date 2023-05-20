import { useRouter } from "next/router";
import furnitureData from "@/lib/apiData/furniture.json";
import Tags from "@/components/Tags";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import ItemPricesDisplay from "@/components/ItemPricesDisplay";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";
import LoadingText from "@/components/LoadingText";
import AcquiredDate from "@/components/AcquiredDate";

export default function FurnitureDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <LoadingText type="furniture" />;
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
      <ItemHeader item={furniture} />
      <Tags furniture={furniture} />
      <ItemImage item={furniture} />
      <ItemPricesDisplay item={furniture} />
      <AcquiredDate item={acquiredFurniture ? acquiredFurniture : furniture} />
    </>
  );
}
