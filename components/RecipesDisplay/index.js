import styled from "styled-components";
import RecipeDisplay from "../RecipeDisplay";
import { DUMMY_RECIPES } from "@/lib/dummyData";

import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";

const StyledRecipes = styled.div`
  width: 100%;
`;

export default function RecipesDisplay({ ingredientFilter = "" }) {
  const filteredRecipes = ingredientFilter
    ? DUMMY_RECIPES.filter((recipe) =>
        recipe.ingredients.some(
          (ingredient) => ingredient[1] === ingredientFilter
        )
      )
    : DUMMY_RECIPES;

  return (
    <StyledRecipes>
      <h3>Recipes</h3>
      <StyledList>
        {filteredRecipes.map((recipe) => {
          return (
            <StyledListItem key={recipe.slug}>
              <RecipeDisplay
                name={recipe.name}
                ingredient1={recipe.ingredients[0][1]}
                ingredient1Amount={recipe.ingredients[0][0]}
                sellingPrice={recipe.sellingPrice}
              />
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledRecipes>
  );
}
