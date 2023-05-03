import styled from "styled-components";
import Image from "next/image";

const StyledItemContainer = styled.div`
  width: 100%;
`;

const StyledItemsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const StyledItemListItem = styled.li`
  border: 1px solid black;
  border-radius: 20px;
  padding: 0 0 1rem 1rem;
  margin-top: 1rem;
`;

const TYPE_HEADINGS = {
  fish: "",
};

export default function ItemsDisplay({ type, fish, furniture }) {
  const heading = TYPE_HEADINGS[type];

  return (
    <StyledItemContainer>
      {heading && <h3>{heading}</h3>}
      {/* <StyledItemsList>
        {furniture.variants.map((variant) => {
          return (
            <StyledItemListItem key={variant.variant}>
              <h4>{variant.variant}</h4>
              <Image
                src={variant.imageSource}
                alt="dummy alt"
                width={100}
                height={100}
              />
            </StyledItemListItem>
          );
        })}
      </StyledItemsList> */}
    </StyledItemContainer>
  );
}
