import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';  // Import FavoritesList
import RecommendationsList from './components/RecommendationsList';  // Import RecommendationsList

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/" exact element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />  {/* Route for favorites */}
        <Route path="/recommendations" element={<RecommendationsList />} />  {/* Route for recommendations */}
      </Routes>
    </Router>
  );
};

export default App;
