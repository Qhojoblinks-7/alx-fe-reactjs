import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Get the list of recipes and the current search term from the Zustand store
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // If the search term is empty, show the most recent recipes (reverse the list)
  // If search term is active, show filtered recipes
  const filteredRecipes = searchTerm
    ? useRecipeStore(state => state.filteredRecipes) // Show filtered recipes when search term exists
    : recipes.slice().reverse(); // Reverse the list to show the most recent recipes first

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        // If there are filtered recipes, render them
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        // If no recipes match the search criteria or no recipes exist, display this message
        <p>No recipes match your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
