import axios from 'axios';


// Get the token from environment variables
const GITHUB_TOKEN = process.env.VITE_GITHUB_API_KEY;

// if (typeof process !== 'undefined') {
//     console.log(process.env.NODE_ENV);
//   } else {
//     console.log("Environment variable not available.");
//   }
  

const githubService = async (query, page = 1) => {
  try {
    const response = await axios.get('https://api.github.com/search/users', {
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