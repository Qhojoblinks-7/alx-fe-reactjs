import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm); // Set the search term

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term as the user types
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for recipes..." 
        onChange={handleSearch} 
      />
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes match your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
