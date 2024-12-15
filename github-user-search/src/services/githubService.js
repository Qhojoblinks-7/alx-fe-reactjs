import axios from 'axios';

// Get the token from environment variables
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_KEY;

const githubService = async (searchTerm, location = '', minRepos = '', page = 1) => {
  try {
    const query = [
      searchTerm ? `${searchTerm} in:login` : '',
      location ? `location:${location}` : '',
      minRepos ? `repos:>${minRepos}` : '',
    ]
      .filter(Boolean)
      .join('+');

    const response = await axios.get('https://api.github.com/search/users?q', {
      params: { q: query, page },
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};

export default githubService;
