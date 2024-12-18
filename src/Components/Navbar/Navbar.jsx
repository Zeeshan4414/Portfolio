import React, { useState } from "react";
import logo from '../../assets/Logo.png';
import { ping } from 'ldrs';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ navItems, buttonText, buttonPath, theme, isMainNavbar, isDashboard }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  ping.register();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(buttonPath);
      setLoading(false);
    }, 1000);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (path) => {
    setIsOpen(false); // Close the menu after clicking an item
    if (isMainNavbar) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {loading ? (
        <l-ping size="90" speed="2" color="grey"></l-ping>
      ) : (
        <div className={`nav flex items-center justify-between shadow-lg rounded-lg mx-4 ${isDashboard ? 'max-w-full' : 'md:mx-16'} my-5 overflow-hidden h-20 px-4`}>
          {/* Logo */}
          <img src={logo} alt="Zeeshan" className={`h-32 w-auto object-contain filter invert`} />
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className={`text-2xl text-white`} /> // Close button text white
              ) : (
                <AiOutlineMenu className={`text-2xl text-white`} />  // Menu icon text white
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 navItems">
            {navItems.map((item, index) => (
              <li key={index} className="relative list-none pb-1 hover:text-grey group">
                {isMainNavbar ? (
                  <a href={item.ref} className={`no-underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} className={`no-underline ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {item.name}
                  </Link>
                )}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
              </li>
            ))}
          </ul>

          {/* Action Button for Desktop */}
          <div 
            className={`hidden md:block px-5 py-2 rounded-lg bg-gradient-to-br from-yellow-500 to-red-600 cursor-pointer text-white transition-transform duration-300 hover:scale-105 ${theme === 'dark' ? 'border-white' : 'border-gray-800'}`} 
            onClick={handleClick}
          >
            {buttonText}
          </div>

          {/* Overlay when menu is open */}
          <div className={`fixed top-0 left-0 z-50 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>

          {/* Mobile Menu */}
          <div className={`absolute w-full 
  ${isDashboard 
    ? 'max-w-[calc(100%-2rem)] mx-2 top-[4.5rem] left-2   ' 
    : 'max-w-[calc(100%-6.3rem)] mx-4 md:max-w-[calc(100%-8rem)] md:mx-16 top-0 left-0 h-4/4 '} 
  bg-gray-900 text-white shadow-lg rounded-md transform z-30
  ${isOpen ? 'translate-y-24' : '-translate-y-full'} 
  transition-transform duration-300`}>

            <ul className="flex flex-col items-center gap-6 p-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative list-none pb-1 group">
                  {isMainNavbar ? (
                    <a
                      href={item.ref}
                      className="no-underline text-white group-hover:text-sky-400 transition-colors duration-300"
                      onClick={() => handleNavItemClick(item.ref)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="no-underline text-white group-hover:text-sky-400 transition-colors duration-300"
                      onClick={() => handleNavItemClick(item.path)}
                    >
                      {item.name}
                    </Link>
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
                </li>
              ))}
              <div
                className="px-5 py-2 mt-4 w-full rounded-lg bg-gradient-to-br from-yellow-500 to-red-600 cursor-pointer text-white text-center transition-transform duration-300 hover:scale-105"
                onClick={handleClick}
              >
                {buttonText}
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
