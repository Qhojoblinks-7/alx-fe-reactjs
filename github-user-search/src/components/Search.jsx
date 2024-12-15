import React, { useState } from 'react';
import { searchUsers } from '../services/GitHubAPI';
import SearchUsers from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    setPage(1);

    try {
      const query = [
        searchTerm ? `${searchTerm} in:login` : '',
        location ? `location:${location}` : '',
        minRepos ? `repos:>${minRepos}` : '',
      ]
        .filter(Boolean)
        .join('+');

      const data = await SearchUsers(query);
      setResults(data.items || []);
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
    setError('');

    try {
      const query = [
        searchTerm ? `${searchTerm} in:login` : '',
        location ? `location:${location}` : '',
        minRepos ? `repos:>${minRepos}` : '',
      ]
        .filter(Boolean)
        .join('+');

      const data = await searchUsers(query, page + 1);
      setResults((prevResults) => [...prevResults, ...data.items]);
    } catch (err) {
      setError('An error occurred while fetching more data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8">Advanced GitHub User Search</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-6 border-t-4 border-blue-500"
      >
        <div>
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by username"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search by location"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="repos" className="block text-gray-700 font-semibold mb-2">
            Minimum Repositories
          </label>
          <input
            id="repos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-gray-500 mt-6">Loading...</p>}
      {error && <p className="text-red-500 mt-6">{error}</p>}
      {results.length > 0 && (
        <div className="mt-8 w-full max-w-2xl space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Search Results:</h2>
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition duration-200"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mr-4 border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
          <button
            onClick={loadMore}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
