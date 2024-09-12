import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-center">
        <p className="text-white mb-4">Connect with us on</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white text-2xl hover:text-gray-300 transition-colors" />
          </a>
        </div>
        <p className="text-white">&copy; 2024 MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
