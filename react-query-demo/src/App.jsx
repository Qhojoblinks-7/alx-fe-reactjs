// src/App.jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DataFetchingComponent from './components/DataFetchingComponent';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Data Fetching</h1>
        <DataFetchingComponent />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
