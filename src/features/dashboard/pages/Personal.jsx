import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaBriefcase, FaFolderOpen, FaCheckCircle, FaLaptopCode, FaSave } from "react-icons/fa";

const Personal = () => {
  const [formData, setFormData] = useState({
    introduction: "",
    skills: "",
    projects: "",
    services: "",
    clients: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
        <span>Edit About Info</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Introduction */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaUserEdit size={12} className="text-orange-400" />
            <span>Biography / Intro text</span>
          </label>
          <textarea
            name="introduction"
            value={formData.introduction}
            onChange={handleInputChange}
            rows="5"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
            placeholder="Write a brief bio about yourself..."
            required
          />
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <FaLaptopCode size={12} className="text-orange-400" />
            <span>Skills (Comma-separated)</span>
          </label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            placeholder="e.g. React.js, Node.js, Tailwind CSS"
            required
          />
        </div>

        {/* Numeric stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaFolderOpen size={12} className="text-orange-400" />
              <span>Projects Count</span>
            </label>
            <input
              type="number"
              name="projects"
              value={formData.projects}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
              placeholder="e.g. 15"
              required
            />
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaBriefcase size={12} className="text-orange-400" />
              <span>Services Count</span>
            </label>
            <input
              type="number"
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
              placeholder="e.g. 9"
              required
            />
          </div>

          {/* Clients */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FaCheckCircle size={12} className="text-orange-400" />
              <span>Happy Clients</span>
            </label>
            <input
              type="number"
              name="clients"
              value={formData.clients}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
              placeholder="e.g. 5"
              required
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3.5 px-8 rounded-2xl shadow-lg transition-all duration-300"
          >
            <FaSave size={14} />
            <span>Save About Info</span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default Personal;
