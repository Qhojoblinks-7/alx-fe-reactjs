// src/components/RecipeDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) return <div className="text-center mt-10 text-lg">Loading recipe...</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="h-64 w-full object-cover rounded-md mb-4" />
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <p className="text-sm text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
          {recipe.ingredients ? (
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No ingredients available.</p>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Cooking Instructions</h2>
          {recipe.instructions ? (
            <p className="text-sm text-gray-600 mb-2">{recipe.instructions}</p>
          ) : (
            <p className="text-sm text-gray-500">No instructions available.</p>
          )}
        </div>

        <div className="text-center">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
