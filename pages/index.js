import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import PageHeading from "@/components/PageHeading";
import Card from "@/components/Card";

const DUMMY_ITEMS = [
  {
    slug: "ozzie",
    type: "resident",
    name: "Ozzie",
    saying: "Half a loaf is better than none.",
    personality: "lazy",
    species: "koala",
    hobby: "play",
    catchphrase: "ol' bear",
    birthday: "May 5th",
    imageSource: "https://acnhapi.com/v1/images/villagers/225",
    iconSource: "https://acnhapi.com/v1/icons/villagers/225",
  },
  {
    slug: "anchovy",
    type: "fish",
    name: "Anchovy",
    quotes: [
      "I caught an anchovy!\nStay away from my pizza!",
      "They swim—mouths open—to filter\nfood particles from the sea.",
    ],
    imageSource: "https://acnhapi.com/v1/images/fish/56",
    iconSource: "https://acnhapi.com/v1/icons/fish/56",
    availability: {
      rarity: "Common",
      location: "at Sea",
      month: "",
      time: "4am – 9pm",
    },
    museum: {
      displayLocation: "Aquarium East, Tank 1",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 400],
        ["Flick", 600],
      ],
    },
  },
  {
    slug: "ladybug",
    type: "bug",
    name: "Ladybug",
    quotes: [
      "I caught a ladybug!\n Sorry to disturb you, ma'am.",
      "It is said that when a ladybug lands on you\n...you'll have good luck!",
    ],
    imageSource: "https://acnhapi.com/v1/images/bugs/43",
    iconSource: "https://acnhapi.com/v1/icons/bugs/43",
    availability: {
      rarity: "Common",
      location: "on flowers",
      month: "Mar–Jun & Oct",
      time: "8am – 5pm",
    },
    museum: {
      displayLocation: "Bug Exhibit, Butterfly Garden",
      mapSource: "https://dummyimage.com/600x400/000/fff.png&text=museum map",
    },
    price: {
      sell: [
        ["Nook's", 200],
        ["Flick", 300],
      ],
    },
    isModelled: false,
  },
  {
    slug: "moroccan-sofa",
    type: "furniture",
    name: "Moroccan Sofa",
    imageSource:
      "https://dummyimage.com/600x400/000/fff.png&text=moroccan sofa",
    iconSource:
      "https://dummyimage.com/400x400/000/fff.png&text=moroccan sofa icon",
    price: {
      buy: [["Nook's", 15000]],
      sell: [["Nook's", 3750]],
    },
    tag: "sofa",
    isDIY: false,
    isInteractive: true,
    isCatalog: true,
    variants: [
      {
        variant: "Red",
        imageSource: "https://dummyimage.com/600x400/000/f00.png&text=red sofa",
      },
      {
        variant: "Yellow",
        imageSource:
          "https://dummyimage.com/600x400/000/ff0.png&text=yellow sofa",
      },
      {
        variant: "Blue",
        imageSource:
          "https://dummyimage.com/600x400/000/00f.png&text=blue sofa",
      },
      {
        variant: "Pink",
        imageSource:
          "https://dummyimage.com/600x400/000/f0c.png&text=pink sofa",
      },
      {
        variant: "White",
        imageSource:
          "https://dummyimage.com/600x400/000/fff.png&text=white sofa",
      },
      {
        variant: "Green",
        imageSource:
          "https://dummyimage.com/600x400/000/080.png&text=green sofa",
      },
    ],
  },
];

const List = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  justify-self: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: 50% 50%;
`;

const ListItem = styled.li`
  position: relative;
  width: 90%;
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
  text-align: center;
`;

const StyledItemsContainer = styled.div`
  border-radius: 10px;
  padding: 0.5rem;
  position: relative;
`;

const ContainerHeading = styled.h3`
  text-align: center;
`;

export default function HomePage() {
  const inputRef = useRef(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [userItems, setUserItems] = useState(null);
  const [itemNotFound, setItemNotFound] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemName = inputRef.current.value.trim();

    const submittedItem = DUMMY_ITEMS.find(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );

    if (userItems === null) {
      setUserItems([{ ...submittedItem, isAcquired: true }]);
      localStorage.setItem(
        "userItems",
        JSON.stringify([{ ...submittedItem, isAcquired: true }])
      );
    } else {
      if (submittedItem) {
        const updatedItems = [
          ...userItems,
          { ...submittedItem, isAcquired: true },
        ];
        setUserItems(updatedItems);
        localStorage.setItem("userItems", JSON.stringify(updatedItems));
      } else {
        setItemNotFound(true);
      }
    }

    inputRef.current.value = "";
  };

  return (
    <>
      <PageHeading>{welcomeMessage}</PageHeading>
      <StyledFormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="query">
            <ContainerHeading>
              {itemNotFound
                ? "Sorry, item not found :("
                : !userItems
                ? "Add something!"
                : "Got more to add?"}
            </ContainerHeading>
          </label>
          <StyledTextInput
            name="query"
            ref={inputRef}
            type="text"
            placeholder="barred knifejaw"
          />
          {itemNotFound && <p>Try adding something else!</p>}
          <div>
            <button type="submit">add</button>
          </div>
        </StyledForm>
      </StyledFormContainer>
      {userItems && (
        <StyledItemsContainer>
          <ContainerHeading>
            Check out what you&apos;ve found so far!
          </ContainerHeading>
          <List role="list">
            {userItems.map((item) => {
              return (
                <ListItem key={item.slug}>
                  <Card name={item.name} type={item.type} slug={item.slug} />
                </ListItem>
              );
            })}
          </List>
        </StyledItemsContainer>
      )}{" "}
    </>
  );
}
