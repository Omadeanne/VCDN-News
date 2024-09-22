import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4">
        {/* Social Media Icons Section */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/anneejiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaFacebook size={20} className="sm:size-24 md:size-28 lg:size-8" />
          </a>
          <a
            href="https://twitter.com/ejibachisom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaTwitter size={20} className="sm:size-24 md:size-28 lg:size-8" />
          </a>
          <a
            href="https://www.instagram.com/ejibachisom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaInstagram size={20} className="sm:size-24 md:size-28 lg:size-8" />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center flex-grow">
          <p className="text-sm sm:text-base md:text-lg">
            © VCDN News 2024, All Rights Reserved.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="sm:mr-2 md:mr-4" />
          <Link
            to="/contact"
            className="text-white hover:text-red-400 transition-colors duration-300 text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
