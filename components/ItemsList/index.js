import styled from "styled-components";
import Card from "../Card";
import Button from "../Button";
import useStore from "@/zustand/store";

export default function ItemsList({ items }) {
  const setRemoveModalOpen = useStore((state) => state.setRemoveModalOpen);

  return (
    <StyledItemsContainer>
      <ListTitle>Check out what you&apos;ve found!</ListTitle>
      <List role="list">
        {items
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
  );
}

const ListTitle = styled.h3`
  text-align: center;
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
