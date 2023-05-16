import { useRouter } from "next/router";

import fishData from "@/lib/apiData/fish.json";
import FishDescription from "@/components/FishDescription";
import ItemHeader from "@/components/ItemHeader";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";
import LoadingText from "@/components/LoadingText";

export default function FishDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <LoadingText type="fish" />;
  }

  const fish = fishData.find(
    (fish) => fish.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredFish = acquiredItems.find((item) => item.name === fish.name);

  return (
    <>
      {isRemoveModalOpen && (
        <RemoveModal item={acquiredFish} acquiredItems={acquiredItems} />
      )}
      <ActionsBar item={fish} acquiredItem={acquiredFish} />
      <ItemHeader title={fish.name} quotes={fish.catchphrases} />
      <FishDescription fish={acquiredFish ? acquiredFish : fish} />
    </>
  );
}
