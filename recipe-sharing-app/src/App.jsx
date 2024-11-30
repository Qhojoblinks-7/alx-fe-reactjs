import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <h1>Welcome to the Receipt Sharing App</h1>
        <p>Share and manage your receipts with ease, inspired by African design!</p>
      </header>
      <main>
        <AddRecipeForm />
        <RecipeList /> {/* Add ReceiptList component here */}
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} Receipt Sharing App. Made with ❤️ for a brighter Africa.
        </p>
      </footer>
    </div>
  );
};

export default App;
