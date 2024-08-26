// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary flex items-center"
          >
            <svg
              className="w-8 h-8 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 21v-6m0 0c-1.3 0-2.5-.5-3.5-1.5s-1.5-2.2-1.5-3.5 1-2.6 2.5-3.2c1.5-.6 3.3.2 3.3 1.8m0 6.4c1.3 0 2.5-.5 3.5-1.5s1.5-2.2 1.5-3.5-1-2.6-2.5-3.2c-1.5-.6-3.3.2-3.3 1.8"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15l-2-2m2 2l2-2"
              />
              <circle cx="12" cy="4" r="2" fill="currentColor" />
            </svg>
            Growth Universe
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
            >
              Courses
            </Link>
            <Link
              to="/workshops-events"
              className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
            >
              Workshops & Events
            </Link>
            <Link
              to="/content-creation"
              className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
            >
              Content
            </Link>
            <Link
              to="/lms"
              className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
            >
              LMS
            </Link>
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-primary hover:text-secondary transition-colors text-lg font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary transition-colors text-lg font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors focus:outline-none"
          >
            <svg
              className="w-8 h-8"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/workshops-events"
              className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Workshops & Events
            </Link>
            <Link
              to="/content-creation"
              className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Content
            </Link>
            <Link
              to="/lms"
              className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              LMS
            </Link>
            <Link
              to="/login"
              className="block py-2 text-primary hover:text-secondary transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block py-2 bg-primary text-white px-5 rounded-full hover:bg-secondary transition-colors text-lg font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
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
