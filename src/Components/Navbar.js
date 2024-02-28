import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ aboutRef, servicesRef, contactRef, projectRef,ourplansRef }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the navbar if the screen size becomes larger
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on component mount

  /* Auto mate scrolling */
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNav(false); // Close the navbar after scrolling
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#b54b9f] cursor-pointer hover:text-gray-400 transition-colors duration-300">
        Saika Nepal 
      </h1>
      <ul className="hidden md:flex">
        <li
          className="p-4 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(aboutRef)}
        >
          Home
        </li>
        <li
          className=" p-4 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(servicesRef)}
        >
          Services
        </li>
        <li
          className="p-4 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(projectRef)}
        >
          Career
        </li>
        <li
          className="p-4 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </li>
        <li
          className="p-4 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(ourplansRef)}
        >
          Plans
        </li>
      </ul>
      {/* Toggle to display menu */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#b54b9f] m-4  hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Saika Nepal 
        </h1>
        <li
          className="p-4 border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(aboutRef)}
        >
          Home
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(contactRef)}
        >
          Contact
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(servicesRef)}
        >
          Our Services
        </li>
        <li className="p-4 border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300" onClick={() => scrollToRef(projectRef)}
        >
          Career
        </li>
        <li className="p-4 border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300" onClick={() => scrollToRef(ourplansRef)}
        >
          Our Plans
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
