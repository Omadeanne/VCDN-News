import { Link } from 'react-router-dom';
import myimage from '../assets/myimage.jpg';

function Navbar() {
  

 

  return (
    <nav className="bg-[#1F1F1F] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">
          <Link to="/">VCDN News</Link>
        </div>

        {/* <div className="w-full max-w-md relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for topics"
            className="w-full p-2 rounded-lg border border-gray-700 bg-[#2A2A2A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-500"
          />
          <FaSearch className="absolute top-3 right-4 text-gray-400" />
        </div> */}

        <div className="flex space-x-8">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/trending-news" className="text-white hover:text-gray-300">Trending News</Link>
          <Link to="/local-news" className="text-white hover:text-gray-300">Local News</Link>
        </div>

        <div className="relative">
          <img src={myimage} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
