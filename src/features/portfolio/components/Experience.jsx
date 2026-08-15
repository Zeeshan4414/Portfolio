import React from "react";
import Head from "../../../components/ui/Head";
import { FaBriefcase } from "react-icons/fa6";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      company: "Xcatalyst Software Company",
      role: "Junior MERN Stack Developer",
      duration: "Jul 2025 - Present",
      description: [
        "Building and maintaining full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js), NestJS, and TypeScript.",
        "Developed cross-platform mobile applications for Android and iOS using React Native and Kotlin Multiplatform (KMP), with API integration and responsive UI implementation.",
        "Implementing Unity-based low-poly 3D application and game environments, including procedural road generation, traffic systems, level design, and 3D asset integration.",
        "Collaborating with the development team to implement new features, maintain existing systems, troubleshoot issues, and resolve bugs on Live & Internal Projects.",
        "Integrating AI technologies into modern applications and development workflows."
      ]
    },
    {
      company: "Punjab Information Technology Board (PITB)",
      role: "Web Developer Intern",
      duration: "Jul 2024 - Dec 2024",
      description: [
        "Developed responsive web applications with a focus on usability, performance, and cross-browser compatibility.",
        "Developed a weather forecasting application using React.js with real-time API integration.",
        "Built a full-stack CRUD application using React.js, Node.js, Express.js, and database integration."
      ]
    },
  ];

  return (
    <div
      className="mt-32 mb-20 flex flex-col justify-center items-center px-4 md:px-20"
      id="experience"
    >
      <Head name="Experience" width="md:w-[300px]" />

      {/* Timeline container */}
      <div className="relative flex flex-col gap-16 mt-16 w-full max-w-4xl">
        {/* Timeline Central Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-indigo-500 rounded-full transform -translate-x-1/2" />

        {experienceData.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row relative w-full items-start md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Central Pulsing Node */}
              <div 
                className="absolute left-[20px] md:left-1/2 top-7 md:top-1/2 w-6 h-6 bg-gray-900 border-4 border-yellow-400 dark:border-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center shadow-lg"
              >
                <motion.div 
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
                />
              </div>

              {/* Company Card Content */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 75 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`ml-10 md:ml-0 w-[calc(100%-3rem)] md:w-[44%] p-6 rounded-3xl 
                  bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10
                  backdrop-blur-lg shadow-xl relative transition-all duration-300`}
              >
                {/* Micro Briefcase Icon */}
                <div className="flex items-center gap-2 mb-3 text-xs tracking-widest font-mono font-semibold text-yellow-500 dark:text-yellow-400">
                  <FaBriefcase />
                  <span>{exp.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.role}
                </h3>
                <h4 className="text-md font-semibold text-indigo-500 dark:text-indigo-400 mt-1 mb-3">
                  {exp.company}
                </h4>

                <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx}>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
