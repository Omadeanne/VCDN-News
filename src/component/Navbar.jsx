import { Link } from "react-router-dom";
// import myimage from '../assets/myimage.jpg';

function Navbar() {
  return (
    <nav className="bg-[#1F1F1F] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link to="/">VCDN News</Link>
        </div>

        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/trending-news" className="text-white hover:text-gray-300">
            Trending News
          </Link>
          <Link to="/local-news" className="text-white hover:text-gray-300">
            Local News
          </Link>
        </div>

        <div className="relative flex space-x-2 cursor-pointer">
  <h3 className="text-white font-normal text-sm hover:text-red-500 transition-colors duration-300">
    Sign In
  </h3>
  <span className="text-white font-normal text-sm">/</span>
  <h3 className="text-white font-normal text-sm hover:text-red-500 transition-colors duration-300">
    Register
  </h3>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
