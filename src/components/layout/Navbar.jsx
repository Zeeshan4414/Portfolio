import React, { useState, useEffect } from "react";
import logo from '../../assets/Logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import Theme from '../ui/ThemeToggle';
import { ping } from 'ldrs';

const Navbar = ({ navItems, buttonText, buttonPath, theme, toggleTheme, isMainNavbar, isDashboard }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  ping.register();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = async () => {
    setLoading(true);
    if (buttonText === "Logout") {
      try {
        const { signOut } = await import("firebase/auth");
        const { auth } = await import("../../services/firebase");
        await signOut(auth);
      } catch (err) {
        console.error("Error signing out:", err);
      }
    }
    setTimeout(() => {
      navigate(buttonPath);
      setLoading(false);
    }, 1000);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (path) => {
    setIsOpen(false);
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
      {loading && (
        <div 
          className="loader-wrapper"
          style={{
            background: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <l-ping size="90" speed="2" color="grey"></l-ping>
        </div>
      )}
      
      <header className={`sticky top-5 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-16 ${isDashboard ? 'max-w-full' : ''}`}>
        <nav className={`w-full h-20 px-6 flex items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-900/60 border-black/5 dark:border-white/10 backdrop-blur-md shadow-lg shadow-black/5' 
            : 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 backdrop-blur-sm'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Zeeshan" className="h-28 w-auto object-contain dark:invert" />
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 m-0 p-0">
            {navItems.map((item, index) => (
              <li key={index} className="list-none group relative">
                {isMainNavbar ? (
                  <a 
                    href={item.ref} 
                    className="text-base md:text-lg font-bold tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 no-underline"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-base md:text-lg font-bold tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 no-underline"
                  >
                    {item.name}
                  </Link>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </li>
            ))}
          </ul>

          {/* Action Button for Desktop */}
          <div className="hidden md:flex items-center gap-5">
            <Theme theme={theme} toggleTheme={toggleTheme} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-2 px-5 rounded-xl shadow-lg shadow-orange-500/10 transition-all duration-300 text-sm"
            >
              {buttonText}
            </motion.button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
            <Theme theme={theme} toggleTheme={toggleTheme} />
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu with Framer Motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 bg-slate-900/90 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl z-40 flex flex-col gap-4 md:hidden"
            >
              <ul className="flex flex-col gap-4 p-0 m-0">
                {navItems.map((item, index) => (
                  <li key={index} className="list-none">
                    {isMainNavbar ? (
                      <a
                        href={item.ref}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-base font-semibold text-gray-300 hover:text-white transition-colors no-underline"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-base font-semibold text-gray-300 hover:text-white transition-colors no-underline"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleClick();
                }}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg text-center text-sm"
              >
                {buttonText}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
