import React from 'react';
import theme from '../../assets/Them.png';
import Head from '../Head';
import {cardData} from './servicesData';

const Services = () => {
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center items-center" id="services">
      <Head name="My Services" width="md:w-[460px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-24 place-items-center px-4 sm:px-0">
        {cardData.map((card) => (
          <div
          key={card.id}
          className="flex flex-col w-full max-w-[350px] h-auto sm:h-[20rem] 
            bg-white/10 dark:bg-white/5 
            border-4 border-gray-300 dark:border-gray-700 
            backdrop-blur-sm rounded-2xl p-5 
            shadow-lg hover:shadow-xl 
            text-gray-900 dark:text-gray-100 
            transition-all duration-300 hover:scale-105"
        >
          <h3 className="text-lg sm:text-xl font-[Kalam] text-indigo-400">{card.number}</h3>
          <h1 className="text-2xl sm:text-3xl font-[Bungee] text-indigo-500 dark:text-indigo-300 sm:h-[7rem]">
            {card.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 ">
            {card.description}
          </p>
          {/* <div className="mt-auto">
            <p className="text-indigo-500 hover:underline cursor-pointer font-medium">
              {card.link}
            </p>
          </div> */}
        </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
