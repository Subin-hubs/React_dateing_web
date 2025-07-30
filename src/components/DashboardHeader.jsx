import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-pink-500">DatingApp</div>
      <nav className="flex space-x-6">
        <Link to="#" className="text-gray-700 hover:text-pink-500">Home</Link>
        <Link to="#" className="text-gray-700 hover:text-pink-500">Blog</Link>
        <Link to="#" className="text-gray-700 hover:text-pink-500">Users</Link>
        <Link to="#" className="text-gray-700 hover:text-pink-500">Contact</Link>
      </nav>
    </header>
  );
};

export default DashboardHeader;