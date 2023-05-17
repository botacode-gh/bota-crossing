import { useRouter } from "next/router";

import ItemHeader from "@/components/ItemHeader";
import ActionsBar from "@/components/ActionsBar";
import BugDescription from "@/components/BugDescription";
import RemoveModal from "@/components/RemoveModal";
import bugsData from "@/lib/apiData/bugs.json";
import LoadingText from "@/components/LoadingText";

export default function BugDetails({ acquiredItems, isRemoveModalOpen }) {
  const router = useRouter();
  const { name } = router.query;

  if (!name) {
    return <LoadingText type="bug" />;
  }

  const bug = bugsData.find(
    (bug) => bug.name.toLowerCase() === name.toLowerCase()
  );
  const acquiredBug = acquiredItems.find((item) => item.name === bug.name);

  return (
    <>
      {isRemoveModalOpen && (
        <RemoveModal item={acquiredBug} acquiredItems={acquiredItems} />
      )}
      <ActionsBar item={bug} acquiredItem={acquiredBug} />
      <ItemHeader item={bug} />
      <BugDescription bug={acquiredBug ? acquiredBug : bug} />
    </>
  );
}
