import { useRouter } from "next/router";

import BackLink from "@/components/BackLink";
import ItemHeader from "@/components/ItemHeader";
import PageHeading from "@/components/PageHeading";

import bugsData from "@/lib/apiData/bugs.json";
import BugDescription from "@/components/BugDescription";
import AnimalPrices from "@/components/AnimalPrices";
import ItemImage from "@/components/ItemImage";
import AcquiredDate from "@/components/AcquiredDate";

export default function BugDetails({ acquiredItems }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <PageHeading>bugging bugs...</PageHeading>;
  }

  const bug = bugsData.find(
    (bug) => bug.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredBug = acquiredItems.find((item) => item.name === bug.name);

  return (
    <>
      <BackLink />
      <ItemHeader title={bug.name} quotes={bug.catchphrases} />
      <BugDescription bug={bug} />
      <AnimalPrices nook={bug.sell_nook} flick={bug.sell_flick} />
      <ItemImage item={bug} />
      <AcquiredDate
        date={acquiredBug ? acquiredBug.acquireDate : null}
        type="bug"
      />
    </>
  );
}
