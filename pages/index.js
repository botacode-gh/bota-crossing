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
  gap: 2rem;
  align-items: center;
  padding-left: 0;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0 1rem 1rem;
  width: max-content;
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
  display: grid;
  padding: 0.5rem;
  position: relative;
  max-width: 850px;
`;

const ContainerHeading = styled.h3`
  text-align: center;
`;

export default function HomePage() {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("visitedSite");
    setWelcomeMessage(isFirstVisit ? "Welcome!" : "Welcome back!");
    localStorage.setItem("visitedSite", true);
  }, []);

  // auto-focusing input field
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <PageHeading>{welcomeMessage}</PageHeading>
      <StyledFormContainer>
        <StyledForm action="">
          <label htmlFor="query">
            <ContainerHeading>Got something new to add?</ContainerHeading>
          </label>
          <StyledTextInput
            name="query"
            ref={inputRef}
            type="text"
            placeholder="barred knifejaw"
          />
          <div>
            <button>add</button>
          </div>
        </StyledForm>
      </StyledFormContainer>
      <StyledItemsContainer>
        <ContainerHeading>
          Check out what you&apos;ve found so far!
        </ContainerHeading>
        <List role="list">
          {DUMMY_ITEMS.map((item) => {
            return (
              <ListItem key={item.slug}>
                <Card name={item.name} type={item.type} slug={item.slug} />
              </ListItem>
            );
          })}
        </List>
      </StyledItemsContainer>
    </div>
  );
}
