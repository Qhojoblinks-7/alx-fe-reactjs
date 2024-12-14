import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

export const searchUsers = async (query) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  };

export default fetchGitHubUser;
