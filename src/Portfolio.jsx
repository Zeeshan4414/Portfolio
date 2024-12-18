import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Services from '../Components/Services/Services';
import ScrollToTopButton from '../Components/Scroll to Top';
import Theme from '../Components/Theme';
import { ping } from 'ldrs';
import '../App.css';
import Footer from './Footer/Footer';
import ContactForm from './Contact/Contact';

const Portfolio = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  ping.register(); 

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const navItems = [
    { name: 'Home', ref: '#' },
    { name: 'About', ref: '#about' },
    { name: 'Services', ref: '#services' },
    { name: 'Portfolio', ref: '#portfolio' },
    { name: 'Contact', ref: '#contact' },
  ];

  return (
    <>
    
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
          <Theme theme={theme} toggleTheme={toggleTheme} />
          <Navbar
            navItems={navItems}
            buttonText="Get Started"
            buttonPath='/ZeeshanAhmad4414/Admin'
            isMainNavbar={true}
            isDashboard={false}
          />
          <Hero />
          <About />
          <Services />
          <ContactForm />
          <ScrollToTopButton />
          <Footer navItems={navItems} isMainNavbar={true}/>
        </div> 
      )}
    
    </>
  );
  
}

export default Portfolio;
