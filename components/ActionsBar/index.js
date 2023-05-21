import styled from "styled-components";
import BackLink from "../BackLink";
import RemoveItemButton from "../RemoveItemButton";
import AddItemButton from "../AddItemButton";

export default function ActionsBar({ item, acquiredItem }) {
  return (
    <StyledContainer>
      <BackLink />
      {acquiredItem ? (
        <RemoveItemButton item={item} />
      ) : (
        <AddItemButton item={item} />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  justify-content: space-between;
`;
