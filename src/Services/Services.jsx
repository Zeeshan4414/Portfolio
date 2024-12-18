import React from 'react';
import theme from '../../assets/Them.png';
import Head from '../Head';
import cardData from './services.json';

const Services = () => {
  return (
    <div className="mt-32 mb-20 flex flex-col justify-center items-center" id='services'>
      <Head name="My Services" width="md:w-[460px]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-24 place-items-center px-4 sm:px-0">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col w-full max-w-[350px] h-auto sm:h-[20rem] border-4 border-sky-200 rounded-lg p-4 transition-colors duration-300 hover:bg-gray-500 hover:cursor-pointer">
            <h3 className="text-lg sm:text-xl font-[Kalam]">{card.number}</h3>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-blue-400 to-blue-500 bg-clip-text text-transparent flex items-center h-auto sm:h-[8rem]">
              {card.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">{card.description}</p>
            <div className="mt-auto">
              <p className="text-sky-400 font-semibold hover:underline cursor-pointer inline">
                {card.link}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
