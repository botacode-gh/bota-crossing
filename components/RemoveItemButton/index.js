import useStore from "@/zustand/store";
import Button from "../StyledButton";

export default function RemoveItemButton({ item }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  function getRemoveText(item) {
    if (item.type === ("fish" || "bug")) {
      return "set free";
    } else if (item.type === "villager") {
      return "kick out";
    }
    return "remove";
  }

  return (
    <>
      <Button
        variant="remove"
        onClick={() => setRemoveModalOpen(true)}
        type="button"
      >
        {getRemoveText(item)}
      </Button>
    </>
  );
}
