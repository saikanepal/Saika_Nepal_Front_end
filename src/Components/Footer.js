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
        <div className="grid w-full grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-10 px-2 sm:px-8 lg:px-16 py-10 sm:py-16 items-start justify-center">
          <div className='sm:w-[80%] lg:w-[40%] gap-3 lg:col-span-2 flex flex-col justify-center items-center relative '>
            <div className="hidden lg:block absolute -right-48 h-full border-l-2 border-white"></div>

            <img src={saikaLogo} />
            <div className="flex gap-1 sm:gap-3 lg:gap-5 font-bold text-white ">
              <a className='hidden sm:block' href="https://www.instagram.com/saikanepal/" target="_blank"><FaLinkedinIn size={25} /></a>
              <a className='hidden sm:block' href="https://www.linkedin.com/company/103794010/" target="_blank"><FaInstagram size={25} /></a>
              <a className='hidden sm:block' href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={25} /></a>
              <a className='hidden sm:block' href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={25} /></a>

              {/* FOR SMALLER SCREEN SIZE  */}
              <a className='block sm:hidden' href="https://www.instagram.com/saikanepal/" target="_blank"><FaLinkedinIn size={15} /></a>
              <a className='block sm:hidden' href="https://www.linkedin.com/company/103794010/" target="_blank"><FaInstagram size={15} /></a>
              <a className='block sm:hidden' href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={15} /></a>
              <a className='block sm:hidden' href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={15} /></a>
            </div>
          </div>

          {/* Saika Nepal  */}
          <div className='text-sm sm:text-lg '>
            <p className="font-bold text-white">Saika Nepal</p>
            <div className="flex flex-col items-start mt-2  text-white space-y-2 ">
              <Link to="/" className=" transition-colors duration-300 hover:text-white">About Us</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Contact Us</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Saika Nepal</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Test link</Link>
            </div>
          </div>

          {/* What we do  */}
          <div className='text-sm sm:text-lg'>
            <p className="font-bold text-white ">What we do</p>
            <div className="flex flex-col items-start mt-2 space-y-2 text-white">
              <Link to="/expedition" className=" transition-colors duration-300 hover:text-white">Designing</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">DevOps and Cloud</Link>
              <Link to="/trekking" className=" transition-colors duration-300 hover:text-white">Webpage Development</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Mobile App Development</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Hosting and Domain</Link>
            </div>
          </div>

          {/* Join US  */}
          <div className='text-sm sm:text-lg'>
            <p className="font-bold text-white ">Join Us</p>
            <div className="flex flex-col items-start my-3 space-y-2 text-white">
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