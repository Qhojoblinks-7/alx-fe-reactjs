import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Recipe Sharing Platform</div>
        <div>
          <Link
            to="/"
            className="text-white hover:bg-blue-600 px-3 py-2 rounded-md transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/add-recipe"
            className="text-white hover:bg-blue-600 px-3 py-2 rounded-md transition duration-200"
          >
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
