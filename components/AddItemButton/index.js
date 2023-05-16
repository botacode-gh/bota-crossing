import useStore from "@/zustand/store";
import Button from "../Button";

export default function AddItemButton({ item }) {
  const addAcquiredItem = useStore((state) => state.addAcquiredItem);

  return (
    <Button
      variant="suggested"
      onClick={() => addAcquiredItem(item)}
      type="button"
    >
      add
    </Button>
  );
}
