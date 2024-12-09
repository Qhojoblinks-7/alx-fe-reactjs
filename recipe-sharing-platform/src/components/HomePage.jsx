// src/components/HomePage.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the public folder
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
                <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover rounded-md mb-2" />
                <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600">{recipe.summary}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-lg font-medium">Loading Recipes...</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
