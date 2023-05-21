import { useRouter } from "next/router";
import villagersData from "@/lib/apiData/villagers.json";
import ItemHeader from "@/components/ItemHeader";
import VillagerDescription from "@/components/VillagerDescription";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";
import VillagerColors from "@/components/VillagerColors";
import LoadingText from "@/components/LoadingText";

export default function ResidentDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <LoadingText type="villager" />;
  }

  const villager = villagersData.find(
    (villager) => villager.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredVillager = acquiredItems.find(
    (item) => item.name === villager.name
  );

  const { text_color, title_color } = villager;

  return (
    <>
      {isRemoveModalOpen && (
        <RemoveModal item={acquiredVillager} acquiredItems={acquiredItems} />
      )}
      <ActionsBar item={villager} acquiredItem={acquiredVillager} />
      <ItemHeader item={villager} />
      <VillagerDescription
        villager={acquiredVillager ? acquiredVillager : villager}
      />
      <VillagerColors title_color={title_color} text_color={text_color} />
    </>
  );
}
