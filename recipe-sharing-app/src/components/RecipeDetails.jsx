import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const editRecipe = useRecipeStore((state) => state.editRecipe);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: recipe?.title || '',
    description: recipe?.description || '',
  });

  const navigate = useNavigate();

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to edit recipe
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editRecipe(recipeId, formData);
    setIsEditing(false); // Exit edit mode
  };

  // Handle recipe deletion
  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the recipe list after deletion
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <h2>Edit Recipe</h2>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
