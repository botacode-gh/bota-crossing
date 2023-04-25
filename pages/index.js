import styled from "styled-components";
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
  /* display: flex;
  flex-direction: column; */
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

export default function HomePage() {
  return (
    <div>
      <PageHeading>Check out what you&apos;ve found so far!</PageHeading>
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
    </div>
  );
}
