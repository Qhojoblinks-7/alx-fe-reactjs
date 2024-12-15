import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

// if (typeof process !== 'undefined') {
//     console.log(process.env.NODE_ENV);
//   } else {
//     console.log("Environment variable not available.");
//   }
  

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};





export const searchUsers = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}`
    );
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};




export default fetchGitHubUser;
