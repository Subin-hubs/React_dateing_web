import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-pink-500">DatingApp</Link>
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-pink-500">About Us</Link>
        <Link to="/blog" className="text-gray-700 hover:text-pink-500">Blog</Link>
        <Link to="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link>
      </nav>
      <div>
        <Link 
          to="/signup" 
          className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;