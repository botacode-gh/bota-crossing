import useStore from "@/zustand/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

import PageHeading from "@/components/PageHeading";
import BackLink from "@/components/BackLink";
import FishDescription from "@/components/FishDescription";
import AnimalPrices from "@/components/AnimalPrices";
import ItemImage from "@/components/ItemImage";
import ItemHeader from "@/components/ItemHeader";
import AcquiredDate from "@/components/AcquiredDate";

import fishData from "@/lib/apiData/fish.json";

export default function FishDetails() {
  const router = useRouter();
  const { name } = router.query;
  const acquiredItems = useStore((state) => state.acquiredItems);

  useEffect(() => {
    useStore.getState().loadAcquiredItems();
  }, []);

  if (!name) {
    return <PageHeading>finding nemo...</PageHeading>;
  }

  const fish = fishData.find(
    (fish) => fish.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredFish = acquiredItems.find((item) => item.name === fish.name);

  return (
    <>
      <BackLink />
      <ItemHeader title={fish.name} quotes={fish.catchphrases} />
      <FishDescription fish={fish} />
      <AnimalPrices nook={fish.sell_nook} cj={fish.sell_cj} />
      <ItemImage item={fish} />
      <AcquiredDate
        date={acquiredFish ? acquiredFish.acquireDate : null}
        type={fish.type}
      />
    </>
  );
}
