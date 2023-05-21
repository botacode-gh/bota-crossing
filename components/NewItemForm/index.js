import styled from "styled-components";
import { useEffect, useState } from "react";
import useStore from "@/zustand/store";
import { getRandom } from "@/lib/utils";
import PageHeading from "../PageHeading";
import Button from "../Button";

export default function NewItemForm({ handleSubmit, inputRef, allItems }) {
  const {
    itemName,
    setItemName,
    searchItems,
    inputPrompt,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useStore();

  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);

  useEffect(() => {
    inputRef.current.value = "";
  });

  if (!allItems) {
    return <PageHeading>Loading items...</PageHeading>;
  }

  const handleInputChange = (event) => {
    const query = event.target.value;

    if (query === "") {
      setSearchResults(null);
      setIsDropdownOpen(false);
    }
    const searchResults = searchItems(query);
    setItemName(query);
    setSearchResults(searchResults);
    setSelectedResult(searchResults.length > 0 ? searchResults[0] : null);
    setIsDropdownOpen(true);
  };

  const handleMouseEnter = () => {
    setIsMouseOverDropdown(true);
  };

  const handleClick = (result, event) => {
    setSelectedResult(result);
    setIsDropdownOpen(false);
    handleSubmit(event);
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
        setIsDropdownOpen(false);
        setSelectedResult(null);
        inputRef.current.value = "";
      }
    } else if (event.key === "Escape") {
      if (inputRef.current.value !== "") {
        inputRef.current.value = "";
        event.current.value = "";
        return;
      }
      inputRef.current.value = "";
      inputRef.current.blur();
      setIsDropdownOpen(false);
    } else if (event.key === "Enter") {
      if (selectedResult) {
        handleSubmit(event);
      }
      inputRef.current.value = "";
    }
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <Title>{inputPrompt}</Title>
        </label>
        <StyledInputConatiner>
          <StyledTextInput
            type="text"
            value={itemName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            placeholder={
              allItems.length > 0
                ? getRandom(allItems, "name").toLowerCase()
                : ""
            }
          />
          {isDropdownOpen && (
            <StyledDropdown
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsMouseOverDropdown(false)}
            >
              {searchResults.slice(0, 6).map((result) => (
                <StyledDropdownItem
                  key={result.name}
                  className={
                    !isMouseOverDropdown && selectedResult === result
                      ? "highlighted"
                      : ""
                  }
                  onClick={(event) => handleClick(result, event)}
                >
                  {result.name}
                </StyledDropdownItem>
              ))}
            </StyledDropdown>
          )}
        </StyledInputConatiner>
        <Button type="submit">add</Button>
      </StyledForm>
    </StyledFormContainer>
  );
}

const Title = styled.h3`
  text-align: center;
`;

const StyledFormContainer = styled.div`
  border-radius: 10px;
  padding: 1.5rem 3rem;
  width: 100%;
  height: fit-content;
  background-color: #fff;
  box-shadow: 0px 1px 2px 1px rgba(92, 22, 0, 0.29);

  &:focus-within {
    z-index: 100;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const StyledInputConatiner = styled.div`
  width: 100%;
`;
const StyledTextInput = styled.input`
  height: 3rem;
  margin-bottom: 0.5rem;
  padding-left: 10px;
  border-radius: 100px;
  width: 100%;
  box-shadow: inset 0px 1px 2px 1px rgba(92, 22, 0, 0.29);
  border: none;
`;

const StyledDropdown = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
  max-height: 100px;
  overflow-y: auto;
  z-index: 100;
`;
const StyledDropdownItem = styled.li`
  cursor: pointer;
  padding: 0.5rem;
  color: darkgray;

  &:hover,
  &:active,
  .highlighted {
    border-radius: 100px;
    background-color: #27a59070;
    color: black;
  }
`;
