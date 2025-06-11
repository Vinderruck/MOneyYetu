// Component/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="top-0 z-50 fixed bg-white shadow-md w-full">
      <div className="flex justify-between items-center mx-auto px-4 py-3 max-w-6xl">
        <Link to="/" className="font-bold text-green-700 text-xl">MoneyYetu</Link>
        <div className="space-x-6 font-medium text-sm">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/blog" className="hover:text-green-600">Blog</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // ✅ DEFAULT EXPORT
