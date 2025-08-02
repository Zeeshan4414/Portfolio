import React from 'react';
import Head from '../Head';
import { projectData } from './projectData';

const Projects = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center mb-20" id="projects">
      <Head name="My Projects" width="md:w-[460px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-24 place-items-center px-4 sm:px-0">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col w-full max-w-[350px] h-auto sm:h-[20rem]
              rounded-2xl border-4 border-yellow-600 dark:border-sky-700 p-4
              bg-white/20 dark:bg-white/5 backdrop-blur-md shadow-lg
              transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          >
            <h3 className="text-lg sm:text-xl font-[Kalam] text-sky-500 dark:text-sky-300">
              {project.type}
            </h3>
            <h1 className="text-2xl sm:text-3xl font-[Bungee] text-yellow-600 dark:text-white h-auto sm:h-[8rem]">
              {project.title}
            </h1>
            <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-yellow-300 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

