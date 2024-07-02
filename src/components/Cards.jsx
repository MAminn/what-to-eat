import React from 'react'

const Cards = ({heading, text, src}) => {
  return (
    
      <div className='relative rounded-xl overflow-hidden'>
        <div className='absolute text-white bg-black/50 w-full h-full'>
          <h4 className=' font-bold text-2xl px-2 pt-4'>{heading}</h4>
          <p className='px-2'>{text}</p>
          <button className='border-white bg-white text-black font-semibold mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          src={src}
          alt=''
          className=' object-cover m-h-[160px] md:max-h-[200px] w-full '
        />
      </div>
   
  );
}

export default Cards