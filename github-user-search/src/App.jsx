import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SearchInput from './components/Search';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-green-700 p-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-white text-2xl font-bold">GitHub User Search</a>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white hover:text-yellow-300">Home</Link></li>
              <li><Link to="/search" className="text-white hover:text-yellow-300">Search</Link></li>
              <li><Link to="/about" className="text-white hover:text-yellow-300">About</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchInput />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
