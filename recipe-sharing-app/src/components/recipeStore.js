import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Full list of recipes
  searchTerm: '', // Search input from the user
  filteredRecipes: [], // Recipes matching the search term

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Set the list of recipes
  setRecipes: (recipes) => set({ recipes }),

  // Set the search term and automatically filter recipes
  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

}));

export default useRecipeStore;
