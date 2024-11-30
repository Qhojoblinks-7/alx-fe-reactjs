import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipe: (recipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...recipe, id: Date.now() }],
        })),
      editRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
    }),
    { name: 'recipe-store' }
  )
);

export default useRecipeStore