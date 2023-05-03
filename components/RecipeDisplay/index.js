import styled from "styled-components";

const StyledRecipe = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 0 0 1rem 1rem;
  position: relative;
`;

const IngredientsContainer = styled.div`
  padding-left: 1rem;
`;

const Price = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.5rem;
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
      <IngredientsContainer>
        <h5>Ingredients:</h5>
        <p>
          {ingredient1Amount} x {ingredient1}
        </p>
      </IngredientsContainer>
      <Price>{sellingPrice} Bells</Price>
    </StyledRecipe>
  );
}
