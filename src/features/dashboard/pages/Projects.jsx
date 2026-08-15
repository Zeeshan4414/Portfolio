import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaSave, FaFolder, FaTag, FaLink, FaParagraph } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([
    { title: "", type: "", link: "", description: "" }
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: "", type: "", link: "", description: "" }]);
  };

  const handleRemoveProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Projects Data:', projects);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
        <span>Manage Projects</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-white/5 border border-white/5 relative flex flex-col gap-4 shadow-sm"
          >
            {/* Remove Card Button */}
            {projects.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/10 rounded-xl"
                aria-label="Remove Project"
              >
                <FaTrash size={14} />
              </button>
            )}

            {/* Project Title */}
            <div className="flex flex-col gap-2 pr-8">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FaFolder size={12} className="text-orange-400" />
                <span>Project Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                placeholder="e.g. Social Manager Pro"
                required
              />
            </div>

            {/* Project Type & Link in Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <FaTag size={12} className="text-orange-400" />
                  <span>Project Category / Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  value={project.type}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                  placeholder="e.g. Web Application"
                  required
                />
              </div>

              {/* Link */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <FaLink size={12} className="text-orange-400" />
                  <span>Project URL Link</span>
                </label>
                <input
                  type="url"
                  name="link"
                  value={project.link}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                  placeholder="https://example.com"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FaParagraph size={12} className="text-orange-400" />
                <span>Description</span>
              </label>
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleInputChange(e, index)}
                rows="3"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
                placeholder="Briefly explain the project goal and stack..."
                required
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4">
          {/* Add more projects */}
          <button
            type="button"
            onClick={handleAddProject}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 rounded-xl transition-all duration-300"
          >
            <FaPlus size={12} />
            <span>Add Project</span>
          </button>

          {/* Submit Save */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3.5 px-8 rounded-2xl shadow-lg transition-all duration-300"
          >
            <FaSave size={14} />
            <span>Save Projects</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Projects;
