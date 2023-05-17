import useStore from "@/zustand/store";
import { getRemoveText } from "@/lib/utils";
import Button from "../Button";

export default function RemoveItemButton({ item }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  return (
    <Button
      variant="remove"
      onClick={() => setRemoveModalOpen(true)}
      type="button"
    >
      {getRemoveText(item)}
    </Button>
  );
}
