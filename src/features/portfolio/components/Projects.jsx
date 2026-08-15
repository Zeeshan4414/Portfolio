import React from 'react';
import Head from '../../../components/ui/Head';
import { projectData } from '../data/projectsData';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Map projects to tags for a NextUI-style badge layout
const projectTags = {
  1: ["React", "Node.js", "Express", "MongoDB", "AI Caption"],
  2: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  3: ["React Native", "Firebase", "Expo", "Media Upload"],
  4: ["NestJS", "MongoDB", "JWT", "RBAC", "OpenAI"],
  5: ["Next.js", "AI Assessment", "Tailwind CSS", "Vercel"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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
      stiffness: 85,
      damping: 14
    }
  }
};

const Projects = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center mb-20 px-4" id="projects">
      <Head name="My Projects" width="md:w-[460px]" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-20 place-items-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -8,
              borderColor: "rgba(245, 158, 11, 0.35)",
              boxShadow: "0 25px 45px -15px rgba(245, 158, 11, 0.15)"
            }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col w-full max-w-[360px] h-[24rem]
              rounded-3xl border border-black/10 dark:border-white/10 p-6
              bg-white/60 dark:bg-black/35 backdrop-blur-lg shadow-md
              transition-all duration-300 hover:cursor-pointer"
          >
            {/* Soft Ambient Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono font-bold tracking-widest text-amber-500 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full uppercase">
                {project.type}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
              {project.title}
            </h1>

            <p className="text-sm text-gray-650 dark:text-gray-400 leading-relaxed mb-4 overflow-hidden line-clamp-3">
              {project.description}
            </p>

            {/* Badges/Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
              {(projectTags[project.id] || []).map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[11px] font-medium bg-gray-500/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-400/10 dark:border-white/5 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 dark:border-white/5 flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 dark:text-yellow-400 hover:text-sky-600 dark:hover:text-yellow-300 transition-colors"
              >
                <span>View Project</span>
                <FaExternalLinkAlt size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
