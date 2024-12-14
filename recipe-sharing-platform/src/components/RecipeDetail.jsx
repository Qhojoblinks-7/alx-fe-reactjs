import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const recipeId = parseInt(id, 10);
    if (isNaN(recipeId)) {
      setError('Invalid recipe ID provided.');
      return;
    }

    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }
        return response.json();
      })
      .then(data => {
        const selectedRecipe = data.find(recipe => recipe.id === recipeId);
        setRecipe(selectedRecipe || null);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch recipe data. Please try again later.');
      });
  }, [id]);

  if (error) return <div className="text-center mt-10 text-lg text-red-500">{error}</div>;
  if (!recipe) return <div className="text-center mt-10 text-lg">Loading recipe...</div>;

  const { title = 'Untitled', image, summary, ingredients = [], instructions } = recipe;

  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <article className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <img
          src={image}
          alt={title || 'Recipe image'}
          className="h-64 w-full object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <p className="text-sm text-gray-700 mb-4">{summary || 'No summary available.'}</p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
          {ingredients.length ? (
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No ingredients available.</p>
          )}
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Cooking Instructions</h2>
          {instructions ? (
            <p className="text-sm text-gray-600 mb-2">{instructions}</p>
          ) : (
            <p className="text-sm text-gray-500">No instructions available.</p>
          )}
        </section>

        <div className="text-center">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Back to Home
          </a>
        </div>
      </article>
    </main>
  );
}

export default RecipeDetail;
