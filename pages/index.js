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
import Button from "@/components/Button";
import ModalButtonContainer from "@/components/ModalButtonContainer";
import RemoveAllModal from "@/components/RemoveAllModal";

const ListTitle = styled.h3`
  text-align: center;
`;

const StyledIslandPic = styled(Image)`
  position: absolute;
  top: 180px;
  left: -180px;
  transform: scaleX(-1);
  z-index: ${(props) => (props.shouldFade ? -1 : 1)};
  opacity: ${(props) => (props.shouldFade ? "33%" : "100%")};
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
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

  const {
    itemName,
    allItems,
    searchItems,
    addAcquiredItem,
    setInputPrompt,
    isRemoveModalOpen,
    setRemoveModalOpen,
    setIsDropdownOpen,
  } = useStore();

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isItemAlreadyAcquired, setIsItemAlreadyAcquired] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        setIsItemAlreadyAcquired(true);
        return;
      }
    }
    if (results.length > 0) {
      addAcquiredItem(firstResult);
      setAddedItem(firstResult);
      setInputPrompt(`Added ${firstResult.name} to your island!`);
      setModalMessage(`Added ${firstResult.name} to your island!`);
      setIsModalOpen(!isModalOpen);
      setIsDropdownOpen(false);
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
        isModalOpen={isModalOpen}
      />
      {isModalOpen && (
        <Modal handleIsModalOpen={() => setIsModalOpen(!isModalOpen)}>
          <h2>{modalMessage}</h2>
          <ModalButtonContainer>
            <Link href={`${ITEM_PATHS[addedItem.type]}/${addedItem.name}`}>
              <Button variant="suggested">check it out</Button>
            </Link>
            <Button variant="remove" onClick={() => setIsModalOpen(false)}>
              close
            </Button>
          </ModalButtonContainer>
        </Modal>
      )}
      <StyledIslandPic
        src={islandPic}
        alt="floating island"
        item="furniture"
        width={500}
        shouldFade={acquiredItems.length > 0}
      />
      {acquiredItems.length > 0 && (
        // do it here
        <StyledItemsContainer>
          <ListTitle>Check out what you&apos;ve found!</ListTitle>
          <List role="list">
            {acquiredItems
              .sort((a, b) => new Date(b.acquireDate) - new Date(a.acquireDate))
              .map((item) => {
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
          <Button
            type="button"
            variant="remove"
            onClick={() => setRemoveModalOpen(true)}
          >
            remove all
          </Button>
        </StyledItemsContainer>
      )}
    </>
  );
}
