import React from "react";
import health from "../assets/healthy-food.jpg";

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute text-gray-200 w-full h-full max-h-[500px] flex flex-col justify-center bg-black/40'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            Key to <span className=' text-[#80cc28]'>Healthy</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span> Life </span>
          </h1>
        </div>
        <img
          src={health}
          alt='hamburger'
          className='w-full max-h-[500px] object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
