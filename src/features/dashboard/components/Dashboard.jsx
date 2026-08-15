import React, { useState } from 'react';
import { Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Personal from '../pages/Personal';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import logo from '../../../assets/Logo.png';
import { FaHome, FaUser, FaFolderOpen, FaLaptopCode, FaSignOutAlt, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../../services/firebase';
import { motion, AnimatePresence } from 'framer-motion';

const DashBoard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: 'Home', icon: <FaHome size={18} /> },
    { name: 'Personal Info', path: 'personalInfo', icon: <FaUser size={18} /> },
    { name: 'Projects', path: 'projects', icon: <FaFolderOpen size={18} /> },
    { name: 'Skills', path: 'skill', icon: <FaLaptopCode size={18} /> },
    { name: 'Experience', path: 'experience', icon: <FaBriefcase size={18} /> },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  const getBreadcrumb = () => {
    const path = location.pathname.split('/').pop();
    if (path === 'personalInfo') return 'Personal Info';
    if (path === 'skill') return 'Skills';
    return path || 'Home';
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center py-2">
          <img src={logo} alt="Logo" className="h-20 w-auto filter invert" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-orange-500/30 text-orange-400'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 border border-transparent"
      >
        <FaSignOutAlt size={18} />
        <span>Sign Out</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-955 via-slate-900 to-indigo-955 text-white flex overflow-hidden">
      
      {/* Desktop Sidebar (Hidden on mobile) */}
      <aside className="w-64 bg-slate-900/40 border-r border-white/10 backdrop-blur-xl hidden md:flex flex-col p-6 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Navigation (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 150 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-slate-950 border-r border-white/10 p-6 z-50 md:hidden flex flex-col"
            >
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
              >
                <FaTimes size={18} />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header */}
        <header className="h-[70px] border-b border-white/5 bg-slate-900/20 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-30 flex-shrink-0">
          <div className="flex items-center gap-2">
            {/* Hamburger Button on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-400 hover:text-white md:hidden hover:bg-white/5 rounded-xl"
            >
              <FaBars size={18} />
            </button>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <span>Admin</span>
              <span>/</span>
              <span className="text-orange-400 font-bold">{getBreadcrumb()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-xs">
              ZA
            </div>
          </div>
        </header>

        {/* Content Panel */}
        <section className="flex-1 p-4 md:p-8 max-w-5xl w-full mx-auto">
          <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='personalInfo' element={<Personal />} />
            <Route path='projects' element={<Projects />} />
            <Route path='skill' element={<Skills />} />
            <Route path='experience' element={<Experience />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
