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

        <div className="grid grid-cols-2 w-full sm:grid-cols-5 gap-10 px-16 py-10 sm:py-16 justify-center">
          <div className='w-1/2 col-span-2 flex flex-col justify-center items-center '>
            <img src={saikaLogo} />
            <div className="flex gap-1 md:gap-5 mt-auto font-bold text-white ">
              <a href="https://www.instagram.com/saikanepal/" target="_blank"><FaLinkedinIn size={25} /></a>
              <a href="https://www.linkedin.com/company/103794010/" target="_blank"><FaInstagram size={25} /></a>
              <a href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={25} /></a>
              <a href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={25} /></a>

            </div>
          </div>

          {/* Saika Nepal  */}
          <div className='text-sm sm:text-lg relative'>
            <div className="absolute -left-52 h-full border-l-2 border-white"></div>
            <p className="font-bold text-white">Saika Nepal</p>
            <div className="flex flex-col items-start mt-2  text-white space-y-2 ">
              <Link to="/" className=" transition-colors duration-300 hover:text-white">About Us</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">Contact Us</Link>
            </div>
          </div>


          {/* What we do  */}
          <div className='text-sm sm:text-lg'>
            <p className="font-bold text-white ">What we do</p>
            <div className="flex flex-col items-start mt-2 space-y-2 text-white">
              <Link to="/trekking" className=" transition-colors duration-300 hover:text-white">Webpage Development</Link>
              <Link to="/expedition" className=" transition-colors duration-300 hover:text-white">Designing</Link>
              <Link to="/" className=" transition-colors duration-300 hover:text-white">DevOps and Cloud</Link>
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