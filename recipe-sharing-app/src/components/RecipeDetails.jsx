import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the recipe ID
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id)) // Find the recipe by ID
  );

  if (!recipe) {
    return <p>Recipe not found.</p>; // Show an error if the recipe is not found
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add other recipe details here */}
    </div>
  );
};

export default RecipeDetails;
