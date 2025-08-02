import React from "react";
import Profile from '../../assets/Profile.png';
import Resume from '../../assets/Zeeshan_CV (Updated).pdf';
import './Hero.css';

const Hero = ({ theme }) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-20 mb-32" id="home">
      <img 
        src={Profile} 
        alt="Profile" 
        width={250} 
        height={250} 
        className={`rounded-full bg-gradient-to-br from-black/70 to-black/30 drop-shadow-lg ${theme === 'dark' ? 'shadow-black' : 'shadow-gray-400'}`} 
      />
      <h1 className="text-xl  md:text-3xl text-center font-semibold">
        I'm <span className="text-2xl md:text-4xl underline bg-gradient-to-br from-orange-600/90 to-yellow-400/30 bg-clip-text text-transparent font-handjet">ZEESHAN AHMAD</span>, Web developer based in Pakistan.
      </h1>
      <p className="text-center w-[93%] md:w-[590px] text-sm md:text-base">
        With a passion for coding and a keen eye for design, I strive to build
        websites that are not only visually appealing but also user-friendly.
      </p>

      <div className="flex items-center gap-16">
        <div className="px-6 py-2 border-2 border-white font-semibold cursor-pointer bg-gradient-to-br from-yellow-400 to-blue-500 rounded-full transition-transform duration-300 hover:scale-105">
        <a href="https://wa.me/qr/ZTM6KULLWXRZH1" target="_blank">
          Connect Me
         </a> 
        </div>
        <div className={`px-6 py-2 border-2 border-gray-600 font-semibold cursor-pointer text-gray-500 rounded-full relative overflow-hidden transition-background duration-1000 hover:bg-gradient-to-br from-yellow-400 to-red-600 ${theme === 'dark' ? 'border-white-100' : 'border-gray-800'} z-10`}>
          <a href={Resume} download={'Resume'} target="_blank">
          My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
