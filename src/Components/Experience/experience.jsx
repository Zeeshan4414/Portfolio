import React from "react";
import Head from "../Head";
import { FaBriefcase } from "react-icons/fa6";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      company: "Xcatalyst.io",
      role: "Junior MERN Stack Developer",
      duration: "Jul 2025 - Present",
      description:
        "Building responsive full-stack applications using React, Node.js, MongoDB, and Express. Collaborating on scalable projects, writing REST APIs, and integrating third-party services.",
    },
    {
      company: "PITB (Punjab Information Technology Board)",
      role: "Web Developer Intern",
      duration: "Jul 2024 - December 2024",
      description:
        "Contributed to internal portal development using HTML, CSS, JavaScript, and React. Improved UI/UX and optimized component structure for performance and reusability.",
    },
  ];

  return (
    <div
      className="mt-32 mb-20 flex flex-col justify-center items-center px-4 md:px-20"
      id="experience"
    >
      <Head name="Experience" width="md:w-[300px]" />

      <div className="flex flex-col gap-10 mt-12 w-full max-w-5xl">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative border-l-4 border-yellow-400 dark:border-yellow-400 pl-8 pr-3 py-6 rounded-lg bg-gray-500 dark:bg-white/5 backdrop-blur-sm shadow-md hover:scale-[1.01] transition-all duration-300"
          >
            {/* Icon */}
            <div className="absolute -left-[22px] top-6 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black p-2 rounded-full">
              <FaBriefcase size={16} />
            </div>

            {/* Role & Company */}
            <h3 className="text-xl font-[Bungee] text-yellow-500 dark:text-yellow-300">
              {exp.role}
            </h3>
            <h4 className="text-lg font-[Kalam] text-gray-800 dark:text-gray-300">
              {exp.company}
            </h4>

            {/* Duration */}
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {exp.duration}
            </p>

            {/* Description */}
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
