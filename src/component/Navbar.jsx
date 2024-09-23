import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1F1F1F] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-3xl lg:text-3xl font-bold">
          <Link to="/" className="cursor-pointer">
            VCDN News
          </Link>
        </div>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>

        {/* Menu links for larger screens */}
        <div
          className={`md:flex md:flex-row md:space-x-8 lg:space-x-12 hidden `}
        >
          <Link
            to="/"
            className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full md:w-auto text-center border border-transparent hover:border-red-500 rounded-lg lg:w-32 lg:h-12"
          >
            Home
          </Link>
          <Link
            to="/trending-news"
            className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full md:w-auto text-center border border-transparent hover:border-red-500 rounded-lg lg:w-48 lg:h-12"
          >
            Trending News
          </Link>
          <Link
            to="/local-news"
            className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full md:w-auto text-center border border-transparent hover:border-red-500 rounded-lg lg:w-48 lg:h-12"
          >
            Local News
          </Link>
          <Link
            to="/sign-in"
            className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full md:w-auto text-center border border-transparent hover:border-red-500 rounded-lg lg:w-32 lg:h-12"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full md:w-auto text-center border border-transparent hover:border-red-500 rounded-lg lg:w-32 lg:h-12"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'fixed top-16 left-0 right-0' : 'hidden'
        } bg-[#1F1F1F] flex flex-col items-center p-4 space-y-4 z-50 md:hidden`}
      >
        <Link
          to="/"
          className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full text-center border border-transparent hover:border-red-500 rounded-lg"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/trending-news"
          className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full text-center border border-transparent hover:border-red-500 rounded-lg"
          onClick={toggleMenu}
        >
          Trending News
        </Link>
        <Link
          to="/local-news"
          className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full text-center border border-transparent hover:border-red-500 rounded-lg"
          onClick={toggleMenu}
        >
          Local News
        </Link>
        <Link
          to="/sign-in"
          className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full text-center border border-transparent hover:border-red-500 rounded-lg"
          onClick={toggleMenu}
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-full text-center border border-transparent hover:border-red-500 rounded-lg"
          onClick={toggleMenu}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
