import React from "react";
import laptopImage from "../assets/laptopimg.jpg"; // Replace with your actual image import
import { ReactComponent as BubbleSVG } from "../assets/bubble.svg";

const AboutSaikaPage = ({ contactRef }) => {
  return (
    <div className="relative text-black bg-gradient-to-b from-white to-gray-200 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen relative">
        <div className="lg:w-1/2 mb-8 lg:mb-0 mt-20 lg:mt-44 flex flex-col items-center lg:items-start sm:items-center">
          <div className="flex flex-col mb-6 mt-10 lg:mt-0">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center lg:text-left font-bold">
              IGNITE <span className="text-purple-600" style={{ color: '#3F72AF' }}>SUCCESS</span>
            </h1>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-center lg:text-left">WITH US</h1>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-8 text-center lg:text-left">
            YOUR DIGITAL <span className="text-blue-500" style={{ color: '#3F72AF' }}>SPARK</span>
          </h1>
          <hr className="w-full lg:w-[480px] border-t-2 border-blue-500 mx-auto lg:mx-0 mb-8" />
          <p className="text-base sm:text-xl lg:text-2xl font-medium text-gray-700 mb-8 lg:mb-12 text-center lg:text-left">
            Simplifying your online presence, from websites to data management. Let's ensure your web journey is seamless.
            <span className="block text-blue-500 mt-2">Join us today.</span>
          </p>

          <div className="flex justify-center lg:justify-start mb-4 relative py-8">
            <button
              onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto lg:w-[220px] min-w-[200px] rounded-md font-medium py-6 lg:py-5 text-white hover:cursor-pointer relative z-10"
              style={{ backgroundColor: '#3F72AF' }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-20 lg:ml-10 sm:ml-0 relative z-10">
          <img
            src={laptopImage} // Replace with your actual image source
            alt="Laptop"
            className="w-full lg:max-w-xl xl:max-w-3xl"
            style={{ marginLeft: '-6px' }} // Move the image to the left by 2 pixels
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
        <BubbleSVG className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-full z-0" />
      </div>
    </div>
  );
};

export default AboutSaikaPage;
