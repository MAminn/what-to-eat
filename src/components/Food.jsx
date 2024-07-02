import React, { useState } from 'react'
import { data } from '../constant/data'

const Food = () => {

const [food, setFood] = useState(data)

  const foodFilter = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      }
    )
  )
  }
  
  const priceFilter = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };



  
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-[#56ad34] font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-start flex-wrap '>
            <button onClick={() => setFood(data)} className='filter-btn'>
              All
            </button>
            <button onClick={() => foodFilter("burger")} className='filter-btn'>
              Cheese
            </button>
            <button onClick={() => foodFilter("pizza")} className='filter-btn'>
              Fruits
            </button>
            <button onClick={() => foodFilter("salad")} className='filter-btn'>
              Baked Goods
            </button>
            <button
              onClick={() => foodFilter("chicken")}
              className='filter-btn'>
              Honey
            </button>
          </div>
        </div>

        {/* Fliter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-evenly max-w-[390px] w-full'>
            <button onClick={() => priceFilter("$")} className='filter-btn'>
              $
            </button>
            <button onClick={() => priceFilter("$$")} className='filter-btn'>
              $$
            </button>
            <button onClick={() => priceFilter("$$$")} className='filter-btn'>
              $$$
            </button>
            <button onClick={() => priceFilter("$$$$")} className='filter-btn'>
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index) => (
          <div
            key={index}
            className='border border-[#347e39] text-white font-semibold shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-[#56ad34] text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food