import logo from '../assets/saikalogo.jpg';
import React, { useState, useEffect, useRef } from 'react';

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const [logoHeight, setLogoHeight] = useState(0);

  useEffect(() => {
    if (logoRef.current) {
      setLogoHeight(logoRef.current.clientHeight);
    }
  }, []);

  return (
    <nav className="flex flex-col md:flex-row p-4 bg-white shadow-md border-b-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="logo mr-4" ref={logoRef}>
          <img src={logo} alt="Saika Nepal Logo" className="w-20 md:w-24" /> {/* Increased the size */}
        </div>
        <button className="md:hidden text-black ml-auto" onClick={() => setIsOpen(!isOpen)}> {/* Moved to the right with ml-auto */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} md:block bg-blue-500 bg-opacity-100 rounded w-full md:w-auto ml-auto mr-20`} /* Moved to right side with margin left auto */
           style={{ height: `${logoHeight}px` }}> {/* Set height to match logo */}
        <ul className="flex flex-col md:flex-row md:space-x-12 space-y-2 md:space-y-0 justify-center w-full md:w-auto"> {/* Increased the space between items */}
          <li><a href="#home" className="text-white font-bold hover:text-blue-300 ml-8">Home</a></li>
          <li><a href="#services" className="text-white font-bold hover:text-blue-300 ml-8">Services</a></li>
          <li><a href="#contact" className="text-white font-bold hover:text-blue-300 ml-8">Contact</a></li>
          <li><a href="#career" className="text-white font-bold hover:text-blue-300 ml-8">Career</a></li>
          <li><a href="#plans" className="text-white font-bold hover:text-blue-300 ml-8 mr-8">Plans</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarNew;















