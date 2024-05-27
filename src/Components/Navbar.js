import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlineContacts } from "react-icons/ai";
import Logo from '../assets/saikalogo.jpg';

const Navbar = ({ aboutRef, servicesRef, contactRef, projectRef, ourplansRef }) => {
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
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-10 w-full p-4 bg-transparent">
      <div className="flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4">
        <div className="flex items-center h-full">
          <img src={Logo} alt="Logo" className="h-full cursor-pointer" />
        </div>
        <div className="flex-1 bg-blue-500 text-white rounded-md ml-4 max-w-2xl">
          <ul className="hidden md:flex justify-center items-center h-full space-x-4">
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(aboutRef)}
            >
              <AiFillHome size={20} className="mr-1" /> Home
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(servicesRef)}
            >
              <AiOutlineUnorderedList className="mr-1" size={20} /> Services
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(projectRef)}
            >
              <AiOutlineUser className="mr-1" size={20} /> Career
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(contactRef)}
            >
              <AiOutlineContacts className="mr-1" size={20} /> Contact
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(ourplansRef)}
            >
              <AiOutlineMenu size={20} className="mr-1" /> Plans
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden cursor-pointer p-4">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-blue-500 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="m-4">
          <img src={Logo} alt="Logo" className="h-full cursor-pointer" />
        </div>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(aboutRef)}
        >
          <AiFillHome className="mr-1" size={20} /> Home
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(contactRef)}
        >
          <AiOutlineContacts className="mr-1" size={20} /> Contact
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(servicesRef)}
        >
          <AiOutlineUnorderedList className="mr-1" size={20} /> Our Services
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(projectRef)}
        >
          <AiOutlineUser size={20} className="mr-1" /> Career
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(ourplansRef)}
        >
          <AiOutlineMenu size={20} className="mr-1" /> Our Plans
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
