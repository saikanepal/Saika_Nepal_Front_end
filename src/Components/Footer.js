import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

import saikaLogo from "../assets/logo192.png"

const Footer = () => {
  return (
    <div className='font-roboto tracking-wide'>
      <footer className="bg-[#112D4E]">
        <div className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-10 px-6 sm:px-8 lg:px-16 py-10 sm:py-16 items-start justify-center">
          <div className='w-[80%] md:w-[60%] gap-3 lg:col-span-2 flex flex-col justify-center items-center relative '>
            <div className="hidden lg:block absolute -right-32 h-full border-l-2 border-white"></div>

            <img className='w-40' src={saikaLogo} />
            <div className="flex gap-3 sm:gap-3 lg:gap-5 mx-auto font-bold text-white ">
              <a className='hidden sm:block hover:bg-white p-2 rounded-full hover:text-[#0077B5]' href="https://www.instagram.com/saikanepal/" target="_blank"><FaInstagram size={25} /></a>
              <a className='hidden sm:block hover:bg-white p-2 rounded-full hover:text-pink-700' href="https://www.linkedin.com/company/103794010/" target="_blank"><FaLinkedinIn size={25} /></a>
              <a className='hidden sm:block hover:bg-white p-2 rounded-full hover:text-[#4e5d94]' href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={25} /></a>
              <a className='hidden sm:block hover:bg-white p-2 rounded-full hover:text-[#4267B2]' href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={25} /></a>

              {/* FOR SMALLER SCREEN SIZE  */}
              <a className='block sm:hidden' href="https://www.instagram.com/saikanepal/" target="_blank"><FaInstagram size={15} /></a>
              <a className='block sm:hidden' href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={15} /></a>
              <a className='block sm:hidden' href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={15} /></a>
              <a className='block sm:hidden' href="https://www.linkedin.com/company/103794010/" target="_blank"><FaLinkedinIn size={15} /></a>
            </div>
          </div>

          {/* Saika Nepal  */}
        <div className='text-[12px] md:text-lg '>
            <p className="font-bold text-white">Saika Nepal</p>
            <div className="flex flex-col items-start mt-2 text-[10px] md:text-base  text-white space-y-1 ">
              <Link to="/" className=" transition-colors duration-300 hover:text-white">About Us</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Contact Us</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Carrer</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Services</Link>
            </div>
          </div>

          {/* What we do  */}
          <div className='hidden sm:block text-[12px] md:text-lg'>
            <p className="font-bold text-white ">What we do</p>
            <div className="flex flex-col items-start mt-2 space-y-1 text-white text-[10px] md:text-base">
              <Link to="/expedition" className=" transition-colors duration-300 hover:text-white">Designing</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">DevOps and Cloud</Link>
              <Link to="/trekking" className=" transition-colors duration-300 hover:text-white">Webpage Development</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Mobile App Development</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Hosting and Domain</Link>
            </div>
          </div>

          {/* Join US  */}
          <div className='text-[12px] md:text-lg'>
            <p className="font-bold text-white ">Join Us</p>
            <div className="flex flex-col items-start my-3 space-y-1 text-white text-[10px] md:text-base">
              <Link to="/" className="transition-colors duration-300 hover:text-white">Carrer</Link>
              <Link to="/" className="transition-colors duration-300 hover:text-white">Internship</Link>
              <Link to="/" className="transition-colors duration-300 hover:text-white">Fellowship</Link>
              <Link to="/" className="transition-colors duration-300 hover:text-white">Life at Saika Nepal</Link>
            </div>

          </div>

        </div>
      </footer >
    </div >
  )
}

export default Footer