import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CustomSlide from "./CustomSlider/CustomSlide";
import businessImage from "../assets/business.gif"
import individualImage from "../assets/individual.jpg"
import dataManagement from "../assets/data.png"
import { ReactTyped } from "react-typed";
import port from "../assets/port.gif";
import dbms from "../assets/dbms.gif"
import store from "../assets/store.png"
const OurServices = () => {
  return (
    <div className="bg-[#EEEDEB] p-16">
      <p className="">

        <ReactTyped
          className='mb-3 text-[#b54b9f] font-bold p-2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl'
          strings={['Our Services']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </p>
      <div className="relative">
        <CustomSlider>
          <CustomSlide
            title="Elevate Your Store"
            header=" E-commerce Website "
            description="In today's digital age, a strong e-commerce presence is vital. We specialize in creating tailored online stores that attract and convert customers. From startups to established brands, our expertise ensures a seamless shopping experience. Partner with us today and boost your sales."
            src={businessImage}
          />
          <CustomSlide
            title="Personal Portfolios"
            header="Showcase Your Talent"
            description="Your personal portfolio website is your digital showcase to the world. Whether you're a designer, developer, photographer, or freelancer, we understand the importance of creating a visually stunning and user-friendly platform to showcase your talent and expertise.

            Our team specializes in crafting personalized portfolio websites that not only highlight your work but also reflect your unique style and personality. With intuitive navigation and responsive design, your portfolio will captivate visitors and leave a lasting impression."
            src={port}
          />
          <CustomSlide
            title="Streamline Operations with Simplified Database Solutions"
            header="Effective Database Management System"
            description="At Saika Tech, we specialize in creating user-friendly web solutions to effortlessly monitor and register new clients, members, or employees. Our customized applications are designed to simplify your processes, ensuring seamless management of vital data.

            With our intuitive systems, you can efficiently track and onboard new clients, members, or employees, empowering your business to thrive. Partner with Saika Tech today and experience the ease of streamlined database management."
            src={
              dbms
            }
          />

        </CustomSlider>
        <style>{`
          .slick-prev:before,
          .slick-next:before {
            color: black !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default OurServices;
