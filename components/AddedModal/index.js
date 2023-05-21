import Link from "next/link";
import useStore from "@/zustand/store";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import ModalButtonContainer from "@/components/ModalButtonContainer";
import { getItemPath } from "@/lib/utils";

export default function AddedModal({ item }) {
  const { addedModalMessage, isAddedModalOpen, setIsAddedModalOpen } =
    useStore();

  return (
    <Modal handleIsModalOpen={() => setIsAddedModalOpen(!isAddedModalOpen)}>
      <h2 style={{ margin: "1rem" }}>{addedModalMessage}</h2>
      <ModalButtonContainer>
        <Link href={getItemPath(item)}>
          <Button variant="suggested">check it out</Button>
        </Link>
        <Button variant="remove" onClick={() => setIsAddedModalOpen(false)}>
          close
        </Button>
      </ModalButtonContainer>
    </Modal>
  );
}
