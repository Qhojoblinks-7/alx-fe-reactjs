import axios from 'axios';

const searchUsers = async (query, page = 1) => {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
  return response.data;
};

export default searchUsers;