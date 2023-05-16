import styled from "styled-components";
import useStore from "@/zustand/store";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

import islandPic from "@/public/floating_island.png";
import PageHeading from "@/components/PageHeading";
import NewItemForm from "@/components/NewItemForm";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Button from "@/components/StyledButton";
import ModalButtonContainer from "@/components/ModalButtonContainer";
import RemoveAllModal from "@/components/RemoveAllModal";

const H3 = styled.h3`
  text-align: center;
`;

const StyledIslandPic = styled(Image)`
  position: absolute;
  bottom: -100px;
  left: -160px;
  transform: scaleX(-1);
  z-index: 1;
  opacity: 100%;
  transition: opacity 0.5s ease-in-out;
  pointer-events: none;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: center;
  gap: 1rem;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  width: 45%;
  justify-self: center;
  align-self: center;
`;

const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 0.5rem;
  gap: 1.5rem;
`;

function getItemIconSource(item) {
  if (item.type === "furniture" || item.type === "clothing") {
    return item.variations[0].image_url;
  }
  if (item.icon_url) {
    return item.icon_url;
  }
  return item.image_url;
}

export default function HomePage({ acquiredItems }) {
  const inputRef = useRef(null);

  const itemName = useStore((state) => state.itemName);
  const allItems = useStore((state) => state.allItems);
  const searchItems = useStore.getState().searchItems;
  const addAcquiredItem = useStore((state) => state.addAcquiredItem);
  const setInputPrompt = useStore((state) => state.setInputPrompt);
  const isRemoveModalOpen = useStore((state) => state.isRemoveModalOpen);
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [itemAlreadyAcquired, setItemAlreadyAcquired] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    inputRef.current.value = "";
    const isFirstVisit = localStorage.getItem("visitedSite") !== "true";
    if (isFirstVisit) {
      localStorage.setItem("visitedSite", "true");
      setWelcomeMessage("Welcome to your island overview!");
    } else {
      setWelcomeMessage("Island overview");
    }

    useStore.getState().loadAllItems();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const results = searchItems(itemName);
    const firstResult = results[0];

    if (!inputRef.current.value) {
      return;
    }

    if (localStorage.getItem("acquiredItems")) {
      const acquiredItems = JSON.parse(localStorage.getItem("acquiredItems"));

      const acquiredItemNames = acquiredItems.map((item) => item.name);

      if (acquiredItemNames.includes(firstResult.name)) {
        setItemAlreadyAcquired(true);
        return;
      }
    }
    if (results.length > 0) {
      addAcquiredItem(firstResult);
      setAddedItem(firstResult);
      setInputPrompt(`Added ${firstResult.name} to your island!`);
      setModalMessage(`Added ${firstResult.name} to your island!`);
      setModalIsVisible(!modalIsVisible);
    }
    event.target.value = "";
  };

  const ITEM_PATHS = {
    fish: "fish",
    bug: "bugs",
    furniture: "furniture",
    clothing: "clothing",
    recipe: "recipes",
    villager: "villagers",
  };

  return (
    <>
      {isRemoveModalOpen && <RemoveAllModal />}
      <PageHeading>{welcomeMessage}</PageHeading>
      <NewItemForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        allItems={allItems}
        modalIsVisible={modalIsVisible}
      />
      {modalIsVisible && (
        <Modal handleModalIsVisible={() => setModalIsVisible(!modalIsVisible)}>
          <h2>{modalMessage}</h2>
          <ModalButtonContainer>
            <Link href={`${ITEM_PATHS[addedItem.type]}/${addedItem.name}`}>
              <Button variant="suggested">check it out</Button>
            </Link>
            <Button variant="remove" onClick={() => setModalIsVisible(false)}>
              close
            </Button>
          </ModalButtonContainer>
        </Modal>
      )}
      {acquiredItems.length === 0 && (
        <StyledIslandPic
          src={islandPic}
          alt="floating island"
          item="furniture"
          width={500}
        />
      )}
      {acquiredItems.length > 0 && (
        <StyledItemsContainer>
          <H3>Check out what you&apos;ve found!</H3>
          <List role="list">
            {acquiredItems.map((item) => {
              return (
                <ListItem key={item.name}>
                  <Card
                    name={item.name}
                    type={item.type}
                    iconSource={getItemIconSource(item)}
                  />
                </ListItem>
              );
            })}
          </List>
          <Button variant="remove" onClick={() => setRemoveModalOpen(true)}>
            remove all
          </Button>
        </StyledItemsContainer>
      )}
    </>
  );
}
