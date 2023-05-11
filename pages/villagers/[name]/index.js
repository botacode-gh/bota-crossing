import { useRouter } from "next/router";

import BackLink from "@/components/BackLink";

import PageHeading from "@/components/PageHeading";
import ItemHeader from "@/components/ItemHeader";
import ItemImage from "@/components/ItemImage";
import VillagerDescription from "@/components/VillagerDescription";
import AcquiredDate from "@/components/AcquiredDate";

import villagersData from "@/lib/apiData/villagers.json";

export default function ResidentDetails({ acquiredItems }) {
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

  if (!villager) {
    return <h1>Loading resident (or trying to)...</h1>;
  }

  return (
    <>
      <BackLink />
      <ItemHeader title={villager.name} quotes={villager.quote} />
      <VillagerDescription villager={villager} />
      <ItemImage item={villager} />
      <AcquiredDate
        date={acquiredVillager ? acquiredVillager.acquireDate : null}
        type={villager.type}
      />
    </>
  );
}
