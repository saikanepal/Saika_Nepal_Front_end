import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CustomSlide from "./CustomSlider/CustomSlide";
import businessImage from "../assets/business.jpg"
import individualImage from "../assets/individual.jpg"
import dataManagement from "../assets/data.png"

const OurServices = () => {
  return (
    <div className="bg-[#EEEDEB] p-16">
      <p className="mb-3 text-[#b54b9f] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Our Services At Saika Tech
      </p>
      <div className="relative">
        <CustomSlider>
          <CustomSlide
            title="Scalable Business Web App"
            header="Business needs"
            description="Every Business Needs Online Recognition,
           

            we understand the significance of establishing a strong online presence for your business. That's why we specialize in crafting tailored web solutions to elevate your brand and drive success. Whether you're entering the world of e-commerce or aiming to enhance customer engagement, our expertise ensures your website effectively represents your business.
            
            With our dedicated support, your website remains optimized, allowing you to focus on what matters most—growing your business.
            
            Partner with us today and elevate your online identity."
            src={
              businessImage
            }
          />
          <CustomSlide
            title="Personalized Websites for Individuals"
            header="Individual Needs"
            description="Personalized Web Solutions for Individuals

            Looking to showcase your talents or establish your personal brand? Saika Tech offers personalized web solutions for individuals, whether you're a freelancer, artist, or someone simply seeking to create a stunning portfolio or personal website. Our custom-built applications are designed to reflect your unique identity and leave a lasting impression.
            
            Partner with us today and unlock the potential of your personal online presence."
            src={
              individualImage
            }
          />
          <CustomSlide
            title="Streamline Operations with Simplified Database Solutions"
            header="Effective Database Management System"
            description="At Saika Tech, we specialize in creating user-friendly web solutions to effortlessly monitor and register new clients, members, or employees. Our customized applications are designed to simplify your processes, ensuring seamless management of vital data.

            With our intuitive systems, you can efficiently track and onboard new clients, members, or employees, empowering your business to thrive. Partner with Saika Tech today and experience the ease of streamlined database management."
            src={
              dataManagement
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
