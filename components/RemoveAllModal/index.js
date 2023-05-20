import styled from "styled-components";
import Router from "next/router";
import useStore from "@/zustand/store";
import Modal from "../Modal";
import Button from "../Button";

export default function RemoveAllModal() {
  const { setRemoveModalOpen, removeAllItems } = useStore();

  function handleRemoveAll() {
    removeAllItems();
    Router.reload();
    Router.push("/#site-title");
  }

  return (
    <Modal handleIsModalOpen={() => setRemoveModalOpen(false)}>
      <p>Are you sure you want to remove all items from your island?</p>
      <ButtonContainer>
        <Button
          type="button"
          variant="remove"
          onClick={() => handleRemoveAll()}
        >
          remove them all!
        </Button>

        <Button
          type="button"
          variant="suggested"
          onClick={() => setRemoveModalOpen(false)}
        >
          noo don&apos;t remove!
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
