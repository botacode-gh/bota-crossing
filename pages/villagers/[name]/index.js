import { useRouter } from "next/router";

import villagersData from "@/lib/apiData/villagers.json";
import PageHeading from "@/components/PageHeading";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import VillagerDescription from "@/components/VillagerDescription";
import AcquiredDate from "@/components/AcquiredDate";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";
import VillagerColors from "@/components/VillagerColors";

export default function ResidentDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <PageHeading>waking up villagers...</PageHeading>;
  }

  const villager = villagersData.find(
    (villager) => villager.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredVillager = acquiredItems.find(
    (item) => item.name === villager.name
  );

  const { text_color, title_color } = villager;
  console.log("text_color:", text_color);
  console.log("title_color:", title_color);

  return (
    <>
      {isRemoveModalOpen && (
        <RemoveModal item={acquiredVillager} acquiredItems={acquiredItems} />
      )}
      <ActionsBar acquiredItem={acquiredVillager} />
      <ItemHeader title={villager.name} quotes={villager.quote} />
      <VillagerDescription villager={villager} />
      <ItemImage item={villager} />
      <AcquiredDate
        date={acquiredVillager ? acquiredVillager.acquireDate : null}
        type={villager.type}
      />
      <VillagerColors title_color={title_color} text_color={text_color} />
    </>
  );
}
