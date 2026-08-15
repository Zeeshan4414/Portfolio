import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaSave, FaBuilding, FaUserTie, FaCalendarAlt, FaParagraph } from 'react-icons/fa';

const Experience = () => {
  const [experiences, setExperiences] = useState([
    { company: "", role: "", duration: "", description: "" }
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index][name] = value;
    setExperiences(newExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: "", role: "", duration: "", description: "" }]);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Experiences Data:', experiences);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
        <span>Manage Experience Timeline</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-white/5 border border-white/5 relative flex flex-col gap-4 shadow-sm"
          >
            {/* Remove Card Button */}
            {experiences.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveExperience(index)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/10 rounded-xl"
                aria-label="Remove Experience"
              >
                <FaTrash size={14} />
              </button>
            )}

            {/* Company Name */}
            <div className="flex flex-col gap-2 pr-8">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FaBuilding size={12} className="text-orange-400" />
                <span>Company Name</span>
              </label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                placeholder="e.g. Xcatalyst.io"
                required
              />
            </div>

            {/* Role & Duration in Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Role */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <FaUserTie size={12} className="text-orange-400" />
                  <span>Job Role / Title</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={exp.role}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                  placeholder="e.g. Junior MERN Stack Developer"
                  required
                />
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt size={12} className="text-orange-400" />
                  <span>Duration</span>
                </label>
                <input
                  type="text"
                  name="duration"
                  value={exp.duration}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                  placeholder="e.g. Jul 2025 - Present"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FaParagraph size={12} className="text-orange-400" />
                <span>Description / Achievements</span>
              </label>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleInputChange(e, index)}
                rows="3"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
                placeholder="Describe your responsibilities, tools used, and metrics..."
                required
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4">
          {/* Add more experience */}
          <button
            type="button"
            onClick={handleAddExperience}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 rounded-xl transition-all duration-300"
          >
            <FaPlus size={12} />
            <span>Add Experience</span>
          </button>

          {/* Submit Save */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3.5 px-8 rounded-2xl shadow-lg transition-all duration-300"
          >
            <FaSave size={14} />
            <span>Save Timeline</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Experience;
