import React from 'react'
import { categories } from '../constant/data';

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4  gap-6 py-6'>
        {categories.map((category) => (
          <div key={category.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center '>
            <h2 className=' font-bold sm:text-xl'>{category.name}</h2>
            <img src={category.image} alt={category.name} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category