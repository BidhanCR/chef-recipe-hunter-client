/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#71bd46] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">
              FoodieFrenzy
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-white hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded bg-[rgb(168,217,105)] text-white hover:bg-a8d969 transition duration-150 ease-in-out"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
          >
            Blogs
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#a8d969] hover:bg-gray-50"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;