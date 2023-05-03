import ItemsDisplay from "@/components/ItemsDisplay";
import PageHeading from "@/components/PageHeading";

export default function FishTankPage() {
  return (
    <>
      <PageHeading>Your fish tank</PageHeading>
      <ItemsDisplay type="fish" />
    </>
  );
}
