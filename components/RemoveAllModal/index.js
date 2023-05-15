import styled from "styled-components";
import Modal from "../Modal";
import Button from "../StyledButton";
import useStore from "@/zustand/store";
import Link from "next/link";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default function RemoveAllModal({ acquiredItems }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  function handleRemoveItem(item) {
    const updatedItems = acquiredItems.filter(
      (acquiredItem) => acquiredItem !== item
    );
    localStorage.setItem("acquiredItems", JSON.stringify(updatedItems));
    setItems(updatedItems);
  }

  function handleRemoveAll() {
    localStorage.removeItem("acquiredItems");
  }

  return (
    <Modal handleModalIsVisible={() => setRemoveModalOpen(false)}>
      <p>Are you sure you want to remove all items from your island?</p>
      <ButtonContainer>
        <Button
          type="button"
          variant="remove"
          onClick={() => localStorage.removeItem("acquiredItems")}
        >
          remove them all!
        </Button>

        <Button
          type="button"
          variant="suggested"
          onClick={() => setRemoveModalOpen(false)}
        >
          nah...
        </Button>
      </ButtonContainer>
    </Modal>
  );
}
