import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Tailwind CSS!</h1>

      <UserProfile />
    </div>
  );
}

export default App;
