import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],  // Array to store the favorite recipe IDs
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]  // Add recipe ID to favorites
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)  // Remove recipe ID from favorites
  })),
  recommendations: [],  // Array to store recommended recipes
  generateRecommendations: () => set((state) => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Random recommendation generation
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
