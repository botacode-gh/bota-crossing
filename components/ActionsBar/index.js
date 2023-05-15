import styled from "styled-components";
import BackLink from "../BackLink";
import RemoveItemButton from "../RemoveItemButton";
import AddItemButton from "../AddItemButton";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export default function ActionsBar({ acquiredItem }) {
  return (
    <StyledContainer>
      <BackLink />
      {acquiredItem && <RemoveItemButton />}
      {!acquiredItem && <AddItemButton />}
    </StyledContainer>
  );
}
