import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const DataFetchingComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ['posts'], // Key for caching the data
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Data stays fresh for 1 minute
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch Data</button>
    </div>
  );
};

export default DataFetchingComponent;