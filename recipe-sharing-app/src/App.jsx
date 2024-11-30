import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import  './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path='/Add Recipe Form' element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper component to pass recipeId from URL params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
