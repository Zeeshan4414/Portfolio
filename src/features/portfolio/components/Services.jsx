import React from 'react';
import Head from '../../../components/ui/Head';
import { cardData } from '../data/servicesData';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaReact, 
  FaServer, 
  FaBrain, 
  FaMobileAlt, 
  FaTachometerAlt 
} from 'react-icons/fa';

// Map IDs to modern developer icons
const iconMap = {
  1: <FaLaptopCode size={28} className="text-sky-500" />,
  2: <FaReact size={28} className="text-cyan-400" />,
  3: <FaServer size={28} className="text-emerald-400" />,
  4: <FaBrain size={28} className="text-purple-400" />,
  5: <FaMobileAlt size={28} className="text-pink-400" />,
  6: <FaTachometerAlt size={28} className="text-amber-400" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14
    }
  }
};

const Services = () => {
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center items-center px-4" id="services">
      <Head name="My Services" width="md:w-[460px]" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-20 place-items-center w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              borderColor: "rgba(255, 255, 255, 0.25)",
              boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)"
            }}
            className="group relative flex flex-col w-full max-w-[360px] h-[21rem] 
              bg-white/60 dark:bg-black/30 backdrop-blur-lg 
              border border-black/10 dark:border-white/10
              rounded-2xl p-6 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:cursor-pointer"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex justify-between items-center mb-6">
              {/* Icon Container with subtle floating loop */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: card.id * 0.2 }}
                className="p-3 bg-white/10 dark:bg-white/5 border border-white/10 rounded-xl"
              >
                {iconMap[card.id] || <FaLaptopCode size={28} />}
              </motion.div>
              <span className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                SERVICE {card.number}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-400 dark:group-hover:text-indigo-300 transition-colors duration-300">
              {card.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {card.description}
            </p>

            {/* Bottom arrow interaction */}
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 group-hover:underline">
              <span>{card.link || "Learn More"}</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
