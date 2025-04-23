import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md" >
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <ul className="flex items-center space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
