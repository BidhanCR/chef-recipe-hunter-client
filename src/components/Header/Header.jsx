
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-red-900" : "text-white";
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-[#71bd46] shadow-lg rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-4xl font-bold text-white">
              FoodieFrenzy
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <Link to="/" className={` text-2xl ${isActive("/")}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className={`text-2xl ${isActive("/blogs")}`}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className={` text-2xl ${isActive("/recipes")}`}
                >
                  Recipes
                </Link>
              </li>

              {/* user profile */}
              {user ? (
                <li className="flex items-center justify-center">
                  {user.photoURL ? (
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  ) : (
                    <FaUserCircle className="h-8 w-8 text-gray-900" />
                  )}
                </li>
              ) : (
                <FaUserCircle className="h-8 w-8 text-gray-900" />
              )}

              <li>
                {user ? (
                  <button
                    className="btn btn-success text-white hover:btn-accent"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-success text-white hover:btn-accent">
                      Login
                    </button>
                  </Link>
                )}
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
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
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
            to="/recipes"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50"
          >
            Recipes
          </Link>
          {/* user profile */}
          {user ? (
            <li className="flex items-center justify-center">
              {user.photoURL ? (
                <img
                  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              ) : (
                <FaUserCircle className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-gray-900" />
              )}
              <span className="ml-2 text-sm md:text-base lg:text-lg font-bold">
                {user.displayName}
              </span>
            </li>
          ) : (
            <FaUserCircle className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-gray-900" />
          )}

          {user ? (
            <button
              className="btn btn-success text-white hover:btn-accent w-full md:w-auto"
              onClick={handleLogOut}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white hover:text-gray-600 transition duration-150 ease-in-out w-full md:w-auto"
            >
              <button className="btn btn-success text-white hover:btn-accent w-full md:w-auto">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
