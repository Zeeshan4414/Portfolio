import React from "react";
import Profile from "../../../assets/My.png";
import Head from "../../../components/ui/Head";
import { FaCode, FaUserCheck, FaLaptopCode, FaTools, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 90, damping: 14 } 
    }
  };

  const skillsData = [
    { category: "Frontend", icon: <FaLayerGroup className="text-cyan-400" />, list: ["React.js", "Next.js", "JavaScript", "HTML & CSS", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend", icon: <FaDatabase className="text-emerald-400" />, list: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"] },
    { category: "Tools & Skills", icon: <FaTools className="text-amber-400" />, list: ["Git & GitHub", "Firebase", "Unity", "Jira & Trello", "Slack", "Google Colab", "JWT", "Postman"] },
  ];

  return (
    <div
      className="about md:py-4 px-6 md:px-20 flex flex-col items-center gap-16"
      id="about"
    >
      {/* Section Heading */}
      <Head name="About Me" width="md:w-[320px]" />

      {/* Bento Grid Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl"
      >
        {/* Card 1: Biography (col-span-8) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
          className="md:col-span-8 p-8 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-xl flex flex-col justify-center transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Story</h3>
          <div className="flex flex-col gap-4 text-sm sm:text-base text-gray-650 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              Hi, I'm a dedicated MERN Stack Developer and AI enthusiast. I specialize in building modern, responsive, and high-performance web applications that merge user-centric frontend experiences with clean, secure backend architectures.
            </p>
            <p>
              Whether crafting custom admin panels, developing AI-driven automation components, or optimizing database endpoints, I focus on delivering clean code structures and high-speed responsiveness. 
            </p>
            <p>
              I'm currently serving as a <strong>Junior MERN Stack Developer</strong> at Xcatalyst, where I collaborate with a fantastic team to create robust production applications.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Profile Picture (col-span-4) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
          className="md:col-span-4 p-4 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-xl flex items-center justify-center overflow-hidden transition-all duration-300"
        >
          <img
            src={Profile}
            alt="My Profile"
            className="rounded-2xl w-full h-[250px] md:h-full object-cover bg-sky-100 hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </motion.div>

        {/* Card 3: Skills Categories (col-span-8) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
          className="md:col-span-8 p-6 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Technical Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-white">
                  {category.icon}
                  <span className="text-sm uppercase tracking-wider">{category.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {category.list.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs bg-gray-500/10 dark:bg-white/5 border border-gray-450/10 dark:border-white/5 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 4: Quick Achievements (col-span-4) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
          className="md:col-span-4 p-6 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-xl flex flex-col justify-center gap-5 transition-all duration-300"
        >
          {[
            { icon: <FaLaptopCode size={20} className="text-sky-400" />, number: "15+", label: "Projects Completed" },
            { icon: <FaCode size={20} className="text-pink-400" />, number: "9+", label: "Offered Services" },
            { icon: <FaUserCheck size={20} className="text-emerald-400" />, number: "5+", label: "Happy Clients" },
          ].map((ach, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-3 bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl">
                {ach.icon}
              </div>
              <div>
                <h4 className="text-2xl font-black text-gray-800 dark:text-white leading-none font-mono">
                  {ach.number}
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold font-mono mt-1 uppercase">
                  {ach.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
