import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from "../assets/images/logo.png";

const services = [
  { id: 1, name: 'Perfumes' },
  { id: 2, name: 'Body' },
  { id: 3, name: 'Candles' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Fetch user info from localStorage when the component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user.name); // Store the name in state if user is logged in
    }
  }, []);

  // Check if the user is logged in by checking the presence of 'isLoggedIn' flag in localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Logout function
  const logout = () => {
    // Clear user session from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    // Redirect to the homepage or login page
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10" alt="Lilia Beauty Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Lilia Beauty</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <>
              <span className="text-black dark:text-white">Hello, {userName}</span> {/* Display user's name */}
              <button
                onClick={logout}
                className="text-white bg-black hover:bg-white hover:text-black font-medium rounded-md border border-black text-sm px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signup"
              className="text-white bg-black hover:bg-white hover:text-black font-medium rounded-md border border-black text-sm px-4 py-2 text-center"
            >
              Get Started
            </Link>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)} // Toggle the state
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XIcon className="w-5 h-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className={`items-center text-xl justify-between md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 hover:text-black"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 hover:text-black"
              >
                About
              </Link>
            </li>

            {/* Conditionally render Dashboard link */}
            {isLoggedIn && (
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 hover:text-black"
                >
                  Dashboard
                </Link>
              </li>
            )}

            <li className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 hover:text-black flex items-center"
              >
                Products
                {servicesOpen ? (
                  <FaChevronUp className="w-5 h-5 ml-1" aria-hidden="true" />
                ) : (
                  <FaChevronDown className="w-5 h-5 ml-1" aria-hidden="true" />
                )}
              </button>
              {servicesOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-lg bg-white shadow-lg">
                  <div className="py-1">
                    {services.map((item) => (
                      <Link
                        key={item.id}
                        to={`/services/${item.id}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-700 rounded md:bg-transparent md:p-0 hover:text-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Shopping Cart Slideover */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="bg-white w-80 h-full shadow-lg p-4">
            <button
              type="button"
              className="mb-4 text-gray-500 hover:text-gray-700"
              onClick={() => setCartOpen(false)}
            >
              <XIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <h2 className="ml-10px text-xl font-semibold">Shopping Cart</h2>
          </div>
          <div className="flex-grow bg-black opacity-50" onClick={() => setCartOpen(false)}></div>
        </div>
      )}
    </nav>
  );
};

export default Header;
