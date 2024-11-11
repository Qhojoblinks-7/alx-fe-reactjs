import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar(){
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', justifyContent: 'center' }}>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
      <li><Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link></li>
      <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
      <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
      <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact: </Link></li>
    </ul>
  </nav>

}


export default Navbar;