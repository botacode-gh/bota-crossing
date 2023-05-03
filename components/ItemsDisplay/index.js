import styled from "styled-components";

import Card from "../Card";

const StyledItemContainer = styled.div`
  width: 100%;
`;

const StyledItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-left: 0;
  width: 100%;
  gap: 1rem;
`;

const StyledItemListItem = styled.li`
  position: relative;
  width: 90%;
  justify-self: center;
  align-self: center;
`;

const TYPE_HEADINGS = {
  fish: "",
  furniture: "Variants",
};

export default function ItemsDisplay({ list }) {
  const heading = TYPE_HEADINGS[list[0].type];

  return (
    <StyledItemContainer>
      {heading && <h3>{heading}</h3>}
      <StyledItemsList>
        {list.map((item) => {
          return (
            <StyledItemListItem key={item.slug}>
              <Card
                name={item.name}
                type={item.type}
                slug={item.slug}
                iconSource={item.iconSource}
                variant="fishTank"
              />
            </StyledItemListItem>
          );
        })}
      </StyledItemsList>
    </StyledItemContainer>
  );
}
