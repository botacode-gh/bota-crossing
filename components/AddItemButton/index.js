import useStore from "@/zustand/store";
import { getAddText } from "@/lib/utils";
import Button from "../Button";

export default function AddItemButton({ item }) {
  const addAcquiredItem = useStore((state) => state.addAcquiredItem);

  return (
    <Button
      variant="suggested"
      onClick={() => addAcquiredItem(item)}
      type="button"
    >
      {getAddText(item)}
    </Button>
  );
}
