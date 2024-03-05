import React, { useRef } from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import laptopAnimation from "../assets/laptopAnimation.json";
import candle from "../assets/candle.json";

const AboutSaikaPage = ({ contactRef }) => {
  const laptopRef = useRef(null);



  return (
    <div className="text-white bg-[#000300]">

      <div className="px-4 gap-2 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center pointer-events-none">
        <div className=" -mb-7 flex justify-center items-center">
          <Lottie
            lottieRef={laptopRef}
            animationData={laptopAnimation}
          
          />
        </div>
        <p className="text-[#b54b9f] font-bold p-2">
          A Nepal Based Startup
        </p>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-3">
            Ignite Success With Us: Your Digital Spark
          </h1>
          <Lottie
            className="w-14 h-30"
            animationData={candle}

            onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
        <div className="mb-3 flex justify-center items-center">
          <ReactTyped
            className='text-[#FFF6E9] font-serif text-3xl md:text-4xl lg:text-5xl font-bold'
            strings={['Your Website', 'Your Software', 'Your Vision', 'Our Expertise']}
            typeSpeed={140}
            backSpeed={130}
            loop
            showCursor={true}
            cursorChar="|"
            smartBackspace={true}
          />
        </div>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="md:text-lg text-base font-bold text-gray-400">
            Your Web Professionals! Simplifying your online presence, from websites to data management. Let's ensure your web journey is seamless – join us today!.
          </p>
        </div>
        <button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })} className="bg-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutSaikaPage;
