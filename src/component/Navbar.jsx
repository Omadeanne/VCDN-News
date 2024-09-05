import { Link } from 'react-scroll'; // Import from react-scroll

function Navbar() {
  return (
    <nav className="bg-[#1F1F1F] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link to="home" smooth={true} duration={500}>VCDN News</Link>
        </div>

        <div className="flex space-x-8">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">
            Home
          </Link>
          <Link to="trending-news" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">
            Trending News
          </Link>
          <Link to="local-news" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer">
            Local News
          </Link>
        </div>

        <div className="relative flex items-center space-x-4 cursor-pointer">
          <h3 className="text-white font-normal text-sm hover:text-red-500 transition-colors duration-300 px-4 py-2 w-24 h-10 text-center border border-transparent hover:border-red-500 rounded-lg">
            Sign In
          </h3>
          {/* <span className="text-white font-normal text-sm">/</span> */}
          <h3 className="text-white font-normal text-sm hover:text-red-500 transition-colors duration-300 px-4 py-2 w-24 h-10 text-center border border-transparent hover:border-red-500 rounded-lg">
            Register
          </h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
