import React from 'react';
import Head from '../Head';
import { projectData } from './projectData';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12
    }
  }
};

const Projects = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center mb-20" id="projects">
      <Head name="My Projects" width="md:w-[460px]" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-24 place-items-center px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.01, rotate: [-1, 0, 1, 0] }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full max-w-[350px] h-auto sm:h-[21rem]
              rounded-2xl border-4 border-yellow-600 dark:border-sky-700 p-5
              bg-white/30 dark:bg-white/5 backdrop-blur-lg shadow-xl
              hover:shadow-2xl transition-all duration-300 group hover:cursor-pointer"
          >
            <h3 className="text-lg sm:text-xl font-[Kalam] text-sky-600 dark:text-sky-300 mb-1">
              {project.type}
            </h3>
            <h1 className="text-2xl sm:text-3xl font-[Bungee] text-yellow-600 dark:text-yellow-300 sm:h-[6rem]">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2">
              {project.description}
            </p>
            <div className="mt-auto pt-4 flex">
              <p>🔗</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 dark:text-yellow-300 font-semibold hover:underline transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
