import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlineContacts } from "react-icons/ai";
import Logo from '../assets/saikalogo.jpg';

const Navbar = ({ aboutRef, servicesRef, contactRef, projectRef }) => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-blue-50");
    } else {
      setBgColor("bg-white");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full p-4 mb-10 transition-colors duration-100 ${bgColor}`}>
      <div className="flex justify-between items-center h-24 max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center h-full">
          <img src={Logo} alt="Logo" className="h-full cursor-pointer" />
        </div>
        <div className="hidden md:flex flex-1 justify-center text-white rounded-md max-w-2xl mx-2 p-4 pl-6 ml-4" style={{ backgroundColor: '#3F72AF' }}>
          <ul className="flex justify-center items-center h-full space-x-6 text-lg">
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(aboutRef)}
            >
              <AiFillHome size={24} className="mr-1" /> Home
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(servicesRef)}
            >
              <AiOutlineUnorderedList className="mr-1" size={24} /> Services
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(contactRef)}
            >
              <AiOutlineContacts className="mr-1" size={24} /> Contact
            </li>
            <li
              className="p-4 flex items-center hover:text-black cursor-pointer transition-colors duration-300"
              onClick={() => scrollToRef(projectRef)}
            >
              <AiOutlineUser className="mr-1" size={24} /> Career
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden cursor-pointer p-4 ml-auto flex justify-end">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed z-40 left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-white ease-in-out duration-500 overflow-y-auto"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="m-4">
          <img src={Logo} alt="Logo" className={`cursor-pointer ${nav ? 'h-24' : 'h-full'}`} />
        </div>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(aboutRef)}
        >
          <AiFillHome className="mr-1" size={25} /> Home
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(contactRef)}
        >
          <AiOutlineContacts className="mr-1" size={25} /> Contact
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(servicesRef)}
        >
          <AiOutlineUnorderedList className="mr-1" size={25} /> Our Services
        </li>
        <li
          className="p-4 border-b border-gray-600 hover:text-black cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(projectRef)}
        >
          <AiOutlineUser size={25} className="mr-1" /> Career
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

