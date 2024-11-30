import { create } from 'zustand';

const useJokeStore = create((set) => ({
  joke: '', // Initial state for the joke
  loading: false, // State to track if data is being fetched
  error: null, // State for any error message

  // Async function to fetch a joke
  fetchJoke: async () => {
    set({ loading: true, error: null }); // Set loading to true before fetching
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Failed to fetch jokes');
      }
      const data = await response.json();
      set({ joke: `${data.setup} - ${data.punchline}`, loading: false }); // Update with the fetched joke
    } catch (error) {
      set({ error: error.message, loading: false }); // Handle errors
    }
  },
}));

export { useJokeStore }; // Export the store
