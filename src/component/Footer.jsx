// Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full h-20 bg-gray-800 text-white flex items-center justify-between p-4 mt-12">
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/anneejiba" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com/ejibachisom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/ejibachisom" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
          <FaInstagram size={24} />
        </a>
      </div>
      <div className="text-center flex-grow">
        <p className="text-sm">© VCDN News 2024, All Rights Reserved.</p>
      </div>
      <div className="absolute right-0 mr-4 flex items-center">
      <FaEnvelope className="mr-2" />
        <Link to="/contact" className="text-white hover:text-red-400 transition-colors duration-300">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
