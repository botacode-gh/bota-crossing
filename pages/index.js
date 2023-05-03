import Fuse from "fuse.js";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import PageHeading from "@/components/PageHeading";
import Card from "@/components/Card";

import { DUMMY_ITEMS } from "@/lib/dummyData";
import { getRandom, getCurrentDate } from "@/lib/utils";
import Modal from "@/components/Modal";

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 50%;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 90%;
  justify-self: center;
  align-self: center;
`;

const StyledFormContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 0 1rem 1rem;
  width: 90%;
  max-width: 290px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledTextInput = styled.input`
  height: 2.5rem;
  margin-bottom: 0.5rem;
  padding-left: 10px;
  border: 2px solid black;
  border-radius: 5%;
`;

const StyledItemsContainer = styled.div`
  border-radius: 10px;
  padding: 0.5rem;
  position: relative;
`;

const ContainerHeading = styled.h3`
  text-align: center;
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  padding: 0.5rem;
  color: darkgray;

  &:hover {
    border: 1px solid lightblue;
    border-radius: 10px;
    background-color: lightblue;
    color: black;
  }

  &.highlighted {
    border: 1px solid lightblue;
    border-radius: 10px;
    background-color: lightblue;
    color: black;
  }
`;

export default function HomePage() {
  const inputRef = useRef(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
  const [itemNotFound, setItemNotFound] = useState(false);
  const [userItems, setUserItems] = useState(null);
  const [itemAlreadyAcquired, setitemAlreadyAcquired] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const isFirstVisit = localStorage.getItem("visitedSite") !== "true";
    if (isFirstVisit) {
      localStorage.setItem("visitedSite", "true");
      setWelcomeMessage("Welcome!");
    } else {
      setWelcomeMessage("Welcome back!");
    }

    const storedItems = localStorage.getItem("userItems");
    if (storedItems) {
      setUserItems(JSON.parse(storedItems));
    }
  }, []);

  //fuzzy search
  const fuseOptions = {
    keys: ["name"],
    threshold: 0.4,
  };
  const fuse = new Fuse(DUMMY_ITEMS, fuseOptions);

  const handleInputChange = (event) => {
    const query = event.target.value.trim();

    if (query === "") {
      setSearchResults([]);
      setSearchResults(null);
      setIsDropdownOpen(false);
    } else {
      const searchResults = fuse.search(query).map((result) => result.item);
      setSearchResults(searchResults);
      setSelectedResult(searchResults.length > 0 ? searchResults[0] : null);
      setIsDropdownOpen(true);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOverDropdown(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOverDropdown(false);
  };

  const handleClick = (result) => {
    inputRef.current.value = result.name;
    setSelectedResult(result);
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      const currentIndex = searchResults.findIndex(
        (result) => result === selectedResult
      );
      const newIndex =
        currentIndex > 0 ? currentIndex - 1 : searchResults.length - 1;
      setSelectedResult(searchResults[newIndex]);
    } else if (event.key === "ArrowDown") {
      const currentIndex = searchResults.findIndex(
        (result) => result === selectedResult
      );
      const newIndex =
        currentIndex < searchResults.length - 1 ? currentIndex + 1 : 0;
      setSelectedResult(searchResults[newIndex]);
    } else if (event.key === "Tab") {
      if (selectedResult) {
        inputRef.current.value = selectedResult.name;
        setIsDropdownOpen(false);
        setSelectedResult(null);
      }
    } else if (event.key === "Escape") {
      if (inputRef.current.value !== "") {
        inputRef.current.value = "";
        return;
      }
      inputRef.current.blur();
      setIsDropdownOpen(false);
    } else if (event.key === "Enter") {
      if (selectedResult) {
        inputRef.current.value = selectedResult.name;
        handleSubmit(event);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemName = inputRef.current.value.trim();

    const searchResults = fuse.search(itemName);

    if (userItems === null) {
      setUserItems([
        {
          ...searchResults[0].item,
          isAcquired: true,
          acquireDate: getCurrentDate(),
        },
      ]);
      localStorage.setItem(
        "userItems",
        JSON.stringify([
          {
            ...searchResults[0].item,
            isAcquired: true,
            acquireDate: getCurrentDate(),
          },
        ])
      );
    } else {
      if (searchResults.length > 0) {
        const submittedItem = searchResults[0].item;
        const isAlreadyAcquired = userItems.some(
          (item) => item.slug === submittedItem.slug
        );

        if (isAlreadyAcquired) {
          setItemNotFound(false);
          setitemAlreadyAcquired(submittedItem);
        } else {
          const updatedItems = [
            ...userItems,
            {
              ...submittedItem,
              isAcquired: true,
              acquireDate: getCurrentDate(),
            },
          ];
          setUserItems(updatedItems);
          localStorage.setItem("userItems", JSON.stringify(updatedItems));
          setAddedItem(submittedItem);
          handleModalIsVisible();
        }
      } else {
        setItemNotFound(true);
      }
    }
    setSearchResults([]);
    inputRef.current.value = "";
  };

  function handleModalIsVisible() {
    setModalIsVisible(!modalIsVisible);
  }

  return (
    <>
      <PageHeading>{welcomeMessage}</PageHeading>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="query">
            <ContainerHeading>
              {itemNotFound ? (
                "Sorry, item not found :("
              ) : itemAlreadyAcquired ? (
                <>
                  {itemAlreadyAcquired.type === "bug" ||
                  itemAlreadyAcquired.type === "fish"
                    ? `${itemAlreadyAcquired.name} already caught!`
                    : itemAlreadyAcquired.type === "resident"
                    ? `${itemAlreadyAcquired.name} is already here!`
                    : `${itemAlreadyAcquired.name} already acquired!`}
                </>
              ) : !userItems ? (
                "Add something!"
              ) : (
                "Got more to add?"
              )}
            </ContainerHeading>
          </label>
          <div>
            <StyledTextInput
              name="query"
              ref={inputRef}
              type="text"
              placeholder={getRandom(DUMMY_ITEMS, "name")}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            {isDropdownOpen && (
              <DropdownMenu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {searchResults.map((result) => (
                  <DropdownItem
                    key={result.slug}
                    className={
                      !isMouseOverDropdown && selectedResult === result
                        ? "highlighted"
                        : ""
                    }
                    onClick={() => handleClick(result)}
                  >
                    {result.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </div>
          {itemNotFound && <p>Try adding something else!</p>}
          <div>
            <button type="submit">add</button>
          </div>
        </StyledForm>
      </StyledFormContainer>
      {modalIsVisible && (
        <Modal handleModalIsVisible={handleModalIsVisible}>
          <h2>{`Added ${addedItem.name} to your items!`}</h2>
        </Modal>
      )}
      {userItems && (
        <StyledItemsContainer>
          <ContainerHeading>Check out what you&apos;ve found!</ContainerHeading>
          <List role="list">
            {userItems.map((item) => {
              return (
                <ListItem key={item.slug}>
                  <Card
                    name={item.name}
                    type={item.type}
                    slug={item.slug}
                    iconSource={item.iconSource}
                  />
                </ListItem>
              );
            })}
          </List>
        </StyledItemsContainer>
      )}{" "}
    </>
  );
}
