import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import { Link } from 'react-router-dom'; 
function App(){
  return(
    <>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/contact">Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h1>404: Page Not Found</h1>
              <p>The page you're looking for doesn't exist. Check the URL or return to the homepage.</p>
            </div>
            } />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;