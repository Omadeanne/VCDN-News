import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#1F1F1F] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link to="/" className="cursor-pointer">
            VCDN News
          </Link>
        </div>

        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 cursor-pointer">
            Home
          </Link>
          <Link to="/trending-news" className="text-white hover:text-gray-300 cursor-pointer">
            Trending News
          </Link>
          <Link to="/local-news" className="text-white hover:text-gray-300 cursor-pointer">
            Local News
          </Link>
        </div>

        <div className="relative flex items-center space-x-4 cursor-pointer">
          <Link to="/sign-in" className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-24 h-10 text-center border border-transparent hover:border-red-500 rounded-lg">
            Sign In
          </Link>
          <Link to="/register" className="text-white hover:text-red-500 transition-colors duration-300 px-4 py-2 w-24 h-10 text-center border border-transparent hover:border-red-500 rounded-lg">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
