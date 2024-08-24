// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFF8F2] shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-[#541400]">
            Growth Universe
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#541400] transition-colors"
            >
              Home
            </Link>
            <Link
              to="#services"
              className="text-gray-700 hover:text-[#541400] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-[#541400] transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#541400] transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#541400] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-[#541400] hover:text-[#FF8A6B] transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#541400] text-white px-4 py-2 rounded-full hover:bg-[#FF8A6B] transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-[#541400] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-[#541400] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block py-2 text-gray-700 hover:text-[#541400] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/products"
              className="block py-2 text-gray-700 hover:text-[#541400] transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-[#541400] transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-[#541400] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block py-2 text-[#541400] hover:text-[#FF8A6B] transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block py-2 mt-2 bg-[#541400] text-white px-4 rounded-full hover:bg-[#FF8A6B] transition-colors text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
