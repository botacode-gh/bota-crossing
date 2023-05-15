import { useRouter } from "next/router";

import fishData from "@/lib/apiData/fish.json";
import PageHeading from "@/components/PageHeading";
import FishDescription from "@/components/FishDescription";
import AnimalPrices from "@/components/AnimalPrices";
import ItemImage from "@/components/ItemImage";
import ItemHeader from "@/components/ItemHeader";
import AcquiredDate from "@/components/AcquiredDate";
import RemoveModal from "@/components/RemoveModal";
import ActionsBar from "@/components/ActionsBar";

export default function FishDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <PageHeading>finding nemo...</PageHeading>;
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
      <ActionsBar acquiredItem={acquiredFish} />
      <ItemHeader title={fish.name} quotes={fish.catchphrases} />
      <FishDescription fish={fish} />
      <ItemImage item={fish} />
      <AnimalPrices nook={fish.sell_nook} cj={fish.sell_cj} />
      <AcquiredDate
        date={acquiredFish ? acquiredFish.acquireDate : null}
        type={fish.type}
      />
    </>
  );
}
