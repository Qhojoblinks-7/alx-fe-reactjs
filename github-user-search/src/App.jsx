import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import SearchInput from './components/Search';
import About from './components/About';

// Handle "Load More"
const loadMore = () => setPage((prevPage) => prevPage + 1);


function App(){
  return(
    <Router>
      <div className='App'>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
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