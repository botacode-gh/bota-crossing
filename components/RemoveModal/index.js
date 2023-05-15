import styled from "styled-components";
import Modal from "../Modal";
import Button from "../StyledButton";
import useStore from "@/zustand/store";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default function RemoveModal({ item, acquiredItems }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);
  console.log("acquiredItems:", acquiredItems);

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
    <Modal handleModalIsVisible={() => setRemoveModalOpen(false)}>
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
