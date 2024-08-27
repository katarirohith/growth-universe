// src/components/Header.jsx
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileOpen(false); // Close profile options on logout
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const getUserInitial = () => {
    return currentUser && currentUser.email
      ? currentUser.email[0].toUpperCase()
      : "?";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close profile options when currentUser changes (i.e., on login/logout)
  useEffect(() => {
    setIsProfileOpen(false);
  }, [currentUser]);

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
            {currentUser ? (
              <Link
                to="/lms"
                className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              >
                LMS
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:text-primary transition-colors text-lg font-medium"
              >
                LMS (Login required)
              </Link>
            )}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-medium hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {getUserInitial()}
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
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
            {currentUser ? (
              <Link
                to="/lms"
                className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LMS
              </Link>
            ) : (
              <Link
                to="/login"
                className="block py-2 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                LMS (Login required)
              </Link>
            )}
            {currentUser ? (
              <>
                <div className="flex items-center justify-between py-2">
                  <span className="text-primary text-lg font-medium">
                    {currentUser.email}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-primary hover:text-secondary transition-colors text-lg font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
