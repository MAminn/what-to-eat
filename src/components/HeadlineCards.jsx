import React from 'react'
import Cards from './Cards'
import milk from "../assets/milk-products.jpg"
import fruits from "../assets/fruits.jpg";
import coursan from "../assets/coursan.jpg";

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 gap-6 '>
      <Cards
        heading='Artisanal cheeses'
        text='such as aged cheddar, goat cheese, brie, and blue cheese'
        src={milk}
      />
      <Cards
        heading="Nature's Bounty: A Symphony of Fresh Fruits "
        text='Added Daily'
        src={fruits}
      />
      <Cards
        heading='Specialty Baked Goods Freshly baked '
        text='Artisanal bread, pastries, and cookies made from premium ingredients'
        src={coursan}
      />
    </div>
  );
}

export default HeadlineCards