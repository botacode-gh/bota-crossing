import { useRef, useEffect, useState } from "react";
import useStore from "@/zustand/store";

import PageHeading from "@/components/PageHeading";
import NewItemForm from "@/components/NewItemForm";
import RemoveAllModal from "@/components/RemoveAllModal";
import IslandPic from "@/components/IslandPic";
import ItemsList from "@/components/ItemsList";
import AddedModal from "@/components/AddedModal";

export default function HomePage({ acquiredItems }) {
  const inputRef = useRef(null);

  const {
    itemName,
    allItems,
    searchItems,
    addAcquiredItem,
    setInputPrompt,
    isRemoveModalOpen,
    isAddedModalOpen,
    setIsAddedModalOpen,
    setIsDropdownOpen,
    setAddedModalMessage,
  } = useStore();

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [isItemAlreadyAcquired, setIsItemAlreadyAcquired] = useState(false);
  const [addedItem, setAddedItem] = useState(null);

  const color = "#27a590";

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
      setInputPrompt(
        <span>
          Added <span style={{ color }}>{firstResult.name}</span> to your
          island!
        </span>
      );
      setAddedModalMessage(
        <span>
          Added <span style={{ color }}>{firstResult.name}</span> to your
          island!
        </span>
      );
      setIsAddedModalOpen(!isAddedModalOpen);
      setIsDropdownOpen(false);
    }
    event.target.value = "";
  };

  return (
    <>
      {isAddedModalOpen && <AddedModal item={addedItem} />}
      {isRemoveModalOpen && <RemoveAllModal />}
      <PageHeading>{welcomeMessage}</PageHeading>
      <NewItemForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        allItems={allItems}
        isAddedModalOpen={isAddedModalOpen}
      />
      <IslandPic shouldFade={acquiredItems.length > 0} />
      {acquiredItems.length > 0 && <ItemsList items={acquiredItems} />}
    </>
  );
}
