import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs';
import { navLinks } from '../constant/data';
import logo from '../assets/ARTISANAL-Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSideMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-[#184b44]'>
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={handleSideMenu}>
          <AiOutlineMenu size={30} />
        </div>
      <img src={logo} alt="logo" width={220} height={50}/>
        <div className='hidden lg:flex bg-gray-200 rounded-full items-center p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[100px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          type='text'
          placeholder='Search foods'
          className=' bg-transparent p-2 w-full focus:outline-none'
        />
      </div>
      <button className='rounded-full py-2  hidden md:flex items-center bg-black text-white'>
        <BsFillCartFill size={20} className='mr-2' /> <p>Cart</p>
      </button>
      {/* Mobile Menu */}
      {/* bg-black/80 fixed w-full top-0 left-0 h-screen z-10 */}
      {isOpen && (
        <div className='bg-black/80 fixed w-full top-0 left-0 h-screen z-10'></div>
      )}

      <div
        className={
          isOpen
            ? `fixed top-0 left-0 w-[300px] bg-white z-10 h-screen duration-300`
            : `fixed top-0 left-[-100%] w-[300px] bg-white z-10 h-screen duration-300`
        }>
        <AiOutlineClose
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
          onClick={handleSideMenu}
        />
        <h2 className='p-4 text-2xl font-semibold'>
          What To <span className='font-bold'>Eat</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            {navLinks.map((link, index) => (
              <li key={index} className='text-xl py-4 flex cursor-pointer'>
                {link.icon} {link.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar