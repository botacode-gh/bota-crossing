import styled from "styled-components";
import useStore from "@/zustand/store";
import { useRef, useEffect, useState } from "react";

import PageHeading from "@/components/PageHeading";
import Modal from "@/components/Modal";
import NewItemForm from "@/components/NewItemForm";
import Card from "@/components/Card";

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
`;

function getItemIconSource(item) {
  if (item.type === "furniture" || item.type === "clothing") {
    return item.variations[0].image_url;
  }
  return item.image_url;
}

export default function HomePage() {
  const inputRef = useRef(null);

  const itemName = useStore((state) => state.itemName);
  const allItems = useStore((state) => state.allItems);
  const searchItems = useStore.getState().searchItems;
  const acquiredItems = useStore((state) => state.acquiredItems);
  const addAcquiredItem = useStore((state) => state.addAcquiredItem);
  const setInputPrompt = useStore((state) => state.setInputPrompt);

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [itemAlreadyAcquired, setItemAlreadyAcquired] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("visitedSite") !== "true";
    if (isFirstVisit) {
      localStorage.setItem("visitedSite", "true");
      setWelcomeMessage("Welcome to your island overview!");
    } else {
      setWelcomeMessage("Island overview");
    }

    useStore.getState().loadAllItems();
    useStore.getState().loadAcquiredItems();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const results = searchItems(itemName);
    const firstResult = results[0];

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
      setInputPrompt("Got anything else?");
      setModalMessage(`Added ${firstResult.name} to your items!`);
      setModalIsVisible(!modalIsVisible);
    }

    inputRef.current.value = "";
  };

  return (
    <>
      <PageHeading>{welcomeMessage}</PageHeading>
      <NewItemForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        allItems={allItems}
      />
      {modalIsVisible && (
        <Modal handleModalIsVisible={() => setModalIsVisible(!modalIsVisible)}>
          <h2>{modalMessage}</h2>
        </Modal>
      )}
      {acquiredItems && (
        <StyledItemsContainer>
          <h3>Check out what you&apos;ve found!</h3>
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
        </StyledItemsContainer>
      )}
    </>
  );
}
