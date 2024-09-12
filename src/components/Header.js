import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { BsBag } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { user, logout } = useAuth(); // Hook for auth context

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "bg-white py-4 shadow-md" : "bg-transparent py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-extrabold text-red-900 animate-pulse">
              MyStore
            </span>
            {/* Changed to blue-500 */}
            <div className="relative inline-block">
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
              {/* Changed to red-500 */}
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="/" className="text-lg font-medium">
            Home
          </a>
          <Link to="/about" className="text-lg font-medium">
            About
          </Link>
          <Link to="/contact" className="text-lg font-medium">
            Contact
          </Link>
        </nav>

        {/* User Greeting and Login/Register */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <span className="text-lg font-medium">Hello, {user.name}</span>
              <button onClick={logout} className="text-lg font-medium">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-lg font-medium flex items-center"
              >
                <FaUser className="mr-2" /> Sign In
              </Link>
              <Link
                to="/register"
                className="text-lg font-medium flex items-center"
              >
                <FaUser className="mr-2" /> Sign Up
              </Link>
            </>
          )}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
