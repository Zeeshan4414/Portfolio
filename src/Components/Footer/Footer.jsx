import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 mb-8">
        
        <div className="flex flex-col items-center">
          <div className="flex items-center space-1 text-xl font-bold animate-pulse">
            <img src={logo} alt="Zeeshan" className="h-36 w-auto object-contain filter invert" />
          </div>
          <p className="mt-0 text-center italic">"Coding is not just a skill, it's a way to create future solutions."</p>
        </div>

        
        <div className="flex flex-col items-center md:mt-12">
          <h4 className="text-2xl font-semibold mb-4">Sections</h4>
          <div className="grid grid-cols-2 gap-4">
            
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-green-400 transition duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-400 transition duration-300">Services</a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-green-400 transition duration-300">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="flex flex-col items-center md:mt-12">
          <h4 className="text-2xl font-semibold mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <a href="https://github.com/Zeeshan4414" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/zeeshan-ahmad-bb34b92b5/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="https://facebook.com/profile.php?id=100044468180622" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.instagram.com/zeeshan_ahmad_4414/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="bg-black py-2 mt-2">
        <p className="text-center text-sm font-semibold">Copyright &copy; 2024 <span className='font-bold text-blue-400 hover:underline cursor-pointer'>Zeeshan Inc</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
