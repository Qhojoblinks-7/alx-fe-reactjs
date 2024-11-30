const ProtectedRoute = ({ children }) => {
    const isAuthenticated = false; // Example authentication check
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  