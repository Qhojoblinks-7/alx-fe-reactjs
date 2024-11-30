import React from 'react';
import { useJokeStore } from './store'; // Ensure the path matches your project structure

function JokeFetcher() {
  const { joke, loading, error, fetchJoke } = useJokeStore(); // Destructure `error` too

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Joke Creator</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Fetching...' : 'Get a Joke'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {joke && <p style={{ marginTop: '20px' }}>{joke}</p>}
    </div>
  );
}

export default JokeFetcher;
