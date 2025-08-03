import React from 'react';
import theme from '../../assets/Them.png';
import Head from '../Head';
import { cardData } from './servicesData';
import { motion } from 'framer-motion';

// Animation variants for staggering cards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
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
      stiffness: 100,
      damping: 15
    }
  }
};

const Services = () => {
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center items-center" id="services">
      <Head name="My Services" width="md:w-[460px]" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-24 place-items-center px-4 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="flex flex-col w-full max-w-[350px] h-auto sm:h-[20rem] 
              bg-white/10 dark:bg-white/5 
              border-4 border-gray-300 dark:border-gray-700 
              backdrop-blur-sm rounded-2xl p-5 
              shadow-lg hover:shadow-xl 
              text-gray-900 dark:text-gray-100 
              transition-all duration-300 hover:cursor-pointer"
              
            whileHover={{ scale: 1.01, rotate: [-1, 0, 1, 0] }}
            variants={cardVariants}
          >
            <h3 className="text-lg sm:text-xl font-[Kalam] text-indigo-400">{card.number}</h3>
            <h1 className="text-2xl sm:text-3xl font-[Bungee] text-indigo-500 dark:text-indigo-300 sm:h-[7rem]">
              {card.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-500 ">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
