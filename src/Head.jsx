import React from 'react'
import theme from "../assets/Them.png";
const Head = ({name,  width}) => {
  return (
    <>
      <div className="head relative w-full flex items-center  justify-center">
        <h1 className={` md:text-[4rem] text-[2.7rem]  font-semibold bg-gradient-to-r from-blue-400 to-orange-500 text-transparent bg-clip-text font-[kalam] `}>
          {name}
        </h1>
        <img
          src={theme}
          alt=""
          className={`absolute bottom-[-1.1rem] md:bottom-[-1.3rem]  md:left-50 z-[-1] filter contrast-50 w-[12rem] ${width} h-28 md:h-40 select-none`}
        />
      </div>
    </>
  );
}

export default Head
