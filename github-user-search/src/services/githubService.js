import axios from 'axios';

// Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Returns detailed user data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Propagate the error for handling in the calling component
  }
};

// Advanced user search
export const searchUsers = async (query, page = 1) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
    return response.data.items; // Returns an array of users
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};
