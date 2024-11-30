import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dynamic routing for BlogPost */}
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Protected Route example */}
        <Route path="/protected" element={<ProtectedRoute><h2>Protected Content</h2></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;