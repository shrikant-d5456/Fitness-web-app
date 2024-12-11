import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="fixed w-full z-40 bg-gradient-to-b from-[#060400ec] via-black to-tranperent  p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex-shrink-0 ">
          <img src="logo.png" alt="Logo" className="h-8 w-8"/>
        </div>
        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-4 uppercase tracking-widest">
          <a href="#home" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#about" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#service" className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#contact" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase tracking-widest bg-black">
          <a href="#home" className="block text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#service" className="block text-white px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#about" className="block text-white px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#contact" className="block text-white px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
