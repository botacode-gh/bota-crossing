import styled from "styled-components";
import { useEffect, useState } from "react";

import PageHeading from "@/components/PageHeading";
import Card from "@/components/Card";

const dummyUserThings = [
  {
    slug: "anchovy",
    name: "Anchovy",
    category: "fish",
  },
  {
    slug: "ladybug",
    name: "Ladybug",
    category: "bug",
  },
  {
    slug: "moroccan-sofa",
    name: "Moroccan Sofa",
    category: "furniture",
  },
  {
    slug: "wizards-robe",
    name: "Wizard's Robe",
    category: "clothing",
  },
  {
    slug: "aji-fry",
    name: "Aji Fry",
    category: "recipe",
  },
  {
    slug: "ozzie",
    name: "Ozzie",
    category: "resident",
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
    const isFirstVisit = !localStorage.getItem("visited");

    setWelcomeMessage(isFirstVisit ? "Welcome!" : "Welcome back!");

    localStorage.setItem("visited", true);
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
          {dummyUserThings.map((item) => {
            return (
              <ListItem key={item.slug}>
                <Card
                  name={item.name}
                  category={item.category}
                  slug={item.slug}
                />
              </ListItem>
            );
          })}
        </List>
      </StyledItemsContainer>
    </div>
  );
}
