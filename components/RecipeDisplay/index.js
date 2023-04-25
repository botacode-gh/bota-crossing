import styled from "styled-components";

const StyledRecipe = styled.div`
  border: 1px solid black;
`;

export default function RecipeDisplay({
  name,
  ingredient1Amount,
  ingredient1,
  sellingPrice,
}) {
  return (
    <StyledRecipe>
      <h4>{name}</h4>
      <p>
        {ingredient1Amount} x {ingredient1}
      </p>
      <div>{sellingPrice} Bells</div>
    </StyledRecipe>
  );
}
