import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/about">About</link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;