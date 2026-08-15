import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../features/portfolio/components/Hero';
import About from '../features/portfolio/components/About';
import Services from '../features/portfolio/components/Services';
import ScrollToTopButton from '../components/ui/ScrollToTop';
import Theme from '../components/ui/ThemeToggle';
import { ping } from 'ldrs';
import '../styles/Theme.css';
import '../App.css';
import Footer from '../components/layout/Footer';
import ContactForm from '../features/portfolio/components/Contact';
import Projects from '../features/portfolio/components/Projects';
import Experience from '../features/portfolio/components/Experience';
import { motion, useScroll } from 'framer-motion';
import CodingBackground from '../components/ui/CodingBackground';

const Portfolio = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  ping.register(); 

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navItems = [
    { name: 'Home', ref: '#' },
    { name: 'About', ref: '#about' },
    { name: 'Experience', ref: '#experience' },
    { name: 'Services', ref: '#services' },
    { name: 'Projects', ref: '#projects' },
    { name: 'Contact', ref: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Coding Rain Background */}
      <CodingBackground theme={theme} />

      {/* Ambient Floating Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[15%] left-[5%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-purple-500/10 blur-[80px] sm:blur-[110px] blob-one"></div>
        <div className="absolute top-[50%] right-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-indigo-500/10 blur-[100px] sm:blur-[130px] blob-two"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-amber-500/10 blur-[80px] sm:blur-[110px] blob-three"></div>
      </div>
    
      {loading &&(
        <div className="loader-wrapper"> 
          <center><l-ping
            size="90"
            speed="2"
            color="grey"
          ></l-ping></center>
        </div>
      ) }
     { !loading && (   
        <div className="cont">

          <Navbar
            navItems={navItems}
            buttonText="Get Started"
            buttonPath='/ZeeshanAhmad4414/Admin'
            isMainNavbar={true}
            isDashboard={false}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <ContactForm />
          <ScrollToTopButton />
          <Footer navItems={navItems} isMainNavbar={true}/>
        </div> 
      )}
    
    </>
  );
  
}

export default Portfolio;
