import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set) => ({
      // State
      recipes: [], // Full list of recipes
      searchTerm: '', // Search input from the user
      filteredRecipes: [], // Recipes matching the search term

      // Actions

      // Add a single recipe with a unique ID
      addRecipe: (recipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...recipe, id: Date.now() }],
          filteredRecipes: [...state.filteredRecipes, { ...recipe, id: Date.now() }],
        })),

      // Edit an existing recipe by ID
      editRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
          filteredRecipes: state.filteredRecipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),

      // Delete a recipe by ID
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
        })),

      // Update the search term and filter recipes
      setSearchTerm: (term) => {
        set({ searchTerm: term });
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(term.toLowerCase())
          ),
        }));
      },

      // Add multiple recipes (for initialization or bulk add)
      addRecipes: (newRecipes) =>
        set((state) => ({
          recipes: [...state.recipes, ...newRecipes],
          filteredRecipes: [...state.recipes, ...newRecipes],
        })),
    }),
    { name: 'recipe-store' } // Persistence key
  )
);

export default useRecipeStore;
