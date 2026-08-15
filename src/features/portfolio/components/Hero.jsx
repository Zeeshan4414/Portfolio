import React, { useState, useEffect } from "react";
import Profile from '../../../assets/Profile.png';
import Resume from '../../../assets/Zeeshan_Resume(Updated).pdf';
import './Hero.css';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ theme }) => {
  const words = ["MERN Stack Developer", "AI Enthusiast", "UI/UX Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(100);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? activeWord.substring(0, prev.length - 1)
            : activeWord.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="flex flex-col items-center gap-6 mt-16 mb-28 text-center px-4" id="home">
      
      {/* Availability Status Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for Freelance & Remote Work
      </motion.div>

      {/* Avatar Container with glowing border */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
        className="relative group cursor-pointer mt-4"
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-amber-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="relative p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-500 rounded-full shadow-2xl">
          <img 
            src={Profile} 
            alt="Profile" 
            className="rounded-full w-[220px] h-[220px] object-cover bg-gray-900 border-4 border-white/10"
          />
        </div>
      </motion.div>

      {/* Big Bold Headline */}
      <div className="max-w-4xl flex flex-col gap-3 mt-4">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-tight leading-tight text-gray-800 dark:text-white"
        >
          I'm <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">ZEESHAN AHMAD</span>,
          <br className="md:hidden" /> <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-600 dark:text-indigo-400 font-bold border-r-2 border-indigo-500 pr-1 animate-pulse">{currentText}</span>
        </motion.h1>
      </div>

      {/* Subdescription */}
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-lg text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed"
      >
        I craft intuitive digital solutions combining full-stack development capability with clean design methodologies. Currently building high-performance web products at Xcatalyst.
      </motion.p>

      {/* Action CTA Buttons */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
      >
        <a 
          href="https://wa.me/qr/ZTM6KULLWXRZH1" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.03]"
        >
          <FaPaperPlane size={14} />
          <span>Connect Me</span>
        </a> 
        <a 
          href={Resume} 
          download={'Resume'} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white/70 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-white font-semibold border border-black/10 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.03]"
        >
          <FaDownload size={14} />
          <span>My Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
