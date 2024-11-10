import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from '/Contact'
import Footer from '/Footer';
import Navbar from '/Navbar';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;