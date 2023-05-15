import useStore from "@/zustand/store";
import Button from "../StyledButton";

export default function RemoveItemButton() {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  return (
    <>
      <Button
        variant="remove"
        onClick={() => setRemoveModalOpen(true)}
        type="button"
      >
        remove
      </Button>
    </>
  );
}
