import BackToMainButton from "@/components/BackToMainButton";
import ItemsDisplay from "@/components/ItemsDisplay";
import PageHeading from "@/components/PageHeading";

import { DUMMY_ITEMS } from "@/lib/dummyData";

const FISHES = DUMMY_ITEMS.filter((item) => item.type === "fish");

export default function FishTankPage() {
  return (
    <>
      <BackToMainButton />
      <PageHeading>Your fish tank</PageHeading>
      <ItemsDisplay list={FISHES} />
    </>
  );
}
