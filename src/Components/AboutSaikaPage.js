import React from "react";
import laptopImage from "../assets/laptopimg.jpg"; // Replace with your actual image import
import { ReactComponent as BubbleSVG } from "../assets/bubble.svg";

const AboutSaikaPage = ({ contactRef }) => {
  return (
    <div className="z-[-1] mt-8 text-black bg-gradient-to-b from-white to-gray-200 relative">
      <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between h-screen relative z-10">
      <div className="md:w-1/2 text-center items-left">
  <div className="flex flex-col text-left mb-4">
    <h1 className="text-6xl font-bold">IGNITE <span className="text-purple-600">SUCCESS</span></h1>
    <h1 className="text-6xl font-bold items-left">WITH US</h1>
  </div>
  <h1 className="text-6xl text-left font-bold mb-6">
    YOUR DIGITAL <span className="text-blue-500">SPARK</span>
  </h1>
  <hr className="w-[480px] border-t-2 border-blue-500 mx-auto mb-6" />
  <p className="text-lg font-medium text-gray-700 mb-8 flex text-left">
    Simplifying your online presence, from websites to data management. Let's ensure your web journey is seamless. Join us Today.
  </p>
  <div className="flex justify-start mb-4">
  <button
  onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
  className="bg-blue-500 w-[220px] rounded-md font-medium py-3 text-white items-left hover:cursor-pointer"
  style={{ zIndex: 999 }} // Ensure the button appears above other elements
>
  Get Started
</button>

  </div>
</div>


        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={laptopImage} // Replace with your actual image source
            alt="Laptop"
            className="w-full max-w-xl"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BubbleSVG className="absolute top-0 left-80 w-1/4 h-full" />
      </div>
    </div>
  );
};

export default AboutSaikaPage;
