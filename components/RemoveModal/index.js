import styled from "styled-components";
import useStore from "@/zustand/store";
import Modal from "../Modal";
import Button from "../Button";

export default function RemoveModal({ item, acquiredItems }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  const handleRemoveItem = (item) => {
    setRemoveModalOpen(false);
    const itemToRemove = acquiredItems.find(
      (acquiredItem) => acquiredItem.name === item.name
    );
    const indexToRemove = acquiredItems.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      acquiredItems.splice(indexToRemove, 1);
      localStorage.setItem("acquiredItems", JSON.stringify(acquiredItems));
    }
  };

  return (
    <Modal handleIsModalOpen={() => setRemoveModalOpen(false)}>
      <p>Are you sure you want to remove this item from your island?</p>
      <ButtonContainer>
        <Button type="button" variant="remove" onClick={handleRemoveItem(item)}>
          remove it!
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
