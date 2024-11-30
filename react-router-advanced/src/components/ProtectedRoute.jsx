import React from 'react';
import { Navigate } from 'react-router-dom';

// A simple example for authentication check (e.g., from local storage or context)
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if the user is authenticated
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to Home if not authenticated
  }

  return children; // Render the protected content if authenticated
};

export default ProtectedRoute;