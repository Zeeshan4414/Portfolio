import React, { useEffect, useRef } from 'react';
import './DashBoard.css';
import Navbar from '../Navbar/Navbar';
import '../Navbar/Navbar.css';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Personal from './Pages/Personal';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

const DashBoard = () => {
  const navItems = [
    { name: 'Home', path: 'Home' },
    { name: 'Personal', path: 'personalInfo' },
    { name: 'Projects', path: 'projects' },
    { name: 'Skills', path: 'skill' },
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    // Set playback rate to slow down the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 means 50% speed
    }
  }, []);

  // Replace this with your actual Google Drive video ID
  const videoUrl = "https://drive.google.com/file/d/1P06KMo2OCAp6QHgRcSM1j6BtRXAzO_ZO/view?usp=drivesdk";

  return (
    <div className="relative min-h-screen bg-opacity-50">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      {/* Header */}
      <div className="bg-[rgb(4,24,41)] backdrop-blur-md h-[70px] flex justify-center items-center z-40 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-[kalam] text-[wheat] stroke-gray-500 stroke-2 z-50">
          Welcome To My Dashboard
        </h1>
      </div>

      {/* Navbar Component */}
      <Navbar
        navItems={navItems}
        buttonText="Logout"
        buttonPath="/"
        isMainNavbar={false}
        isDashboard={true}
      />

      {/* Routes */}
      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path='personalInfo' element={<Personal />} />
        <Route path='projects' element={<Projects />} />
        <Route path='skill' element={<Skills />} />
      </Routes> 

      {/* Footer */}
      <Footer navItems={navItems} /> 
    </div>
  );
};

export default DashBoard;
