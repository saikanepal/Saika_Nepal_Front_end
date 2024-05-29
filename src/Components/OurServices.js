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
import dbms from "../assets/database.jpg"
import store from "../assets/store.png";
import marketingWebsite from "../assets/marketing_website.gif";
import mobileApp from "../assets/mobile_app.gif";
import hostingServices from "../assets/hosting_services.gif";

const OurServices = () => {
  return (
    <div className="bg-blue-50 p-16">
      <p className="text-5xl text-center font-bold mb-10">
        Our <span className="text-custom-blue font-Saira">Services</span>
      </p>
      <div className="relative mt-2">
        <CustomSlider>
          <CustomSlide
            title="Elevate Your Store"
            header=" E-commerce Website "
            description="In today's digital age, a strong e-commerce presence is vital. We specialize in creating tailored online stores that attract and convert customers. From startups to established brands, our expertise ensures a seamless shopping experience. Partner with us today and boost your sales."
            src={businessImage}
          />
          <CustomSlide
            title="Showcase Your Talent"
            header="Personal Portfolios"
            description="Your personal portfolio website is your digital showcase to the world. Whether you're a designer, developer, photographer, or freelancer, we understand the importance of creating a visually stunning and user-friendly platform to showcase your talent and expertise.

            Websites that not only highlight your work but also reflect your unique style and personality."
            src={port}
          />
          <CustomSlide
            title="Streamline Operations with Simplified Database Solutions"
            header="Database Management System"
            description="At Saika Tech, we specialize in creating user-friendly web solutions to effortlessly monitor and register new clients, members, or employees. Our customized applications are designed to simplify your processes, ensuring seamless management of vital data.

            With our intuitive systems, you can efficiently track and onboard new clients, members, or employees, empowering your business to thrive. Partner with Saika Tech today and experience the ease of streamlined database management."
            src={dbms}
          />
          <CustomSlide
            title="Elevate Your Brand Online"
            header="Business Marketing Website"
            description="Establish a strong online presence with a custom-designed marketing website tailored to your business goals. Our websites are optimized for conversions and equipped with powerful marketing tools to attract and engage your target audience, driving growth and visibility for your brand."
            src={marketingWebsite}
          />
          <CustomSlide
            title="Reach Customers on Every Device"
            header="Mobile App Development"
            description="Expand your reach and enhance customer engagement with our mobile app development services. From iOS and Android to cross-platform solutions, we specialize in creating user-friendly and feature-rich mobile applications that captivate users and drive business success."
            src={mobileApp}
          />
          <CustomSlide
            title="Reliable Hosting Solutions"
            header="Web Hosting Services"
            description="Ensure your website remains online and accessible with our reliable web hosting solutions. We offer scalable hosting plans tailored to your specific needs, backed by robust infrastructure and support to keep your website secure and performant."
            src={hostingServices}
          />
        </CustomSlider>
        <style>{`
          .slick-prev:before,
          .slick-next:before {
            content: '';
            display: block;
            text-align: center;
            line-height: 40px; /* Ensure the text is vertically centered */
            width: 40px;
            height: 40px;
            font-size:40px;
            border-radius: 50%;
            background-color: ;
            color: #3F72AF !important;
            font-weight:bolder;
           
          }
          
          .slick-prev:before {
            content: '🞀'; 
            position:absolute;
            left:-10px
          }
          
          .slick-next:before {
            content: '🞂'; 
            position:absolute;
            right:10px
          }
          
          
        `}</style>
      </div>
    </div>
  );
};

export default OurServices;
