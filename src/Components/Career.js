import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CareerSlide from "./CustomSlider/CareerSlide";
import internImage from "../assets/Animation - 1716823244101.json"
import bubbleImage from '../assets/Vectorcloud.png'
import joinUs from "../assets/joinus.gif"
import Lottie from "lottie-react";
// import { create } from '@lottiefiles/lottie-interactivity';
const Career = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const animateRef = useRef();
  const handleClick = () => {

    const emailAddress = 'saikanepal@gmail.com';

    // Copy email address to clipboard
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => console.error('Failed to copy email: ', error));

    // Open Gmail in a new tab
    window.open(`mailto:${emailAddress}`);



  };

  return (
    // <div className="bg-white p-16">
    //   <p className="mb-3 text-[#F72798] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
    //     Job Openings
    //   </p>
    //   <div className="mt-2 relative">
    //     <CustomSlider>
    //       <CareerSlide
    //         title="Web Developer Student Intern"
    //         header="Starting only 3-4 hours per day paid Internship"
    //         description="Are you a passionate student or recent graduate majoring in Computer Science, Software Engineering, Computer Engineering, or related fields? We're seeking talented individuals to join our team as a web developer Intern. This is a great opportunity to gain valuable hands-on experience and grow your skills in a dynamic work environment."
    //         src={
    //           internImage
    //         }
    //         projectFlag={true}
    //         jobURL="https://forms.gle/dQN4REGfViXUzhYMA"
    //       />


    //       <CareerSlide
    //         title="Be a part of the team"
    //         header="Want to be part of the team?"
    //         description="If you have skills or ideas you believe could benefit our organization, don't hesitate to reach out. Email us at career@saikanepal.com"
    //         src={
    //           joinUs
    //         }
    //         projectFlag={false}

    //       />
    //     </CustomSlider>
    //     {/* <style>{`
    //       .slick-prev:before,
    //       .slick-next:before {
    //         color: black;
    //       }
    //     `}</style> */}
    //   </div>
    // </div>
    <div className="bg-blue-50 flex flex-col font-Saira items-center justify-center py-16 text-white">
      <h2 className="text-5xl font-bold mb-16  text-[#112D4E] text-center">Be a Part Of Our Team</h2>
      <div className="w-5/6 bg-[#3F72AF] lg:bg-transparent flex flex-col lg:flex-row justify-center items-center lg:items-start p-10">
        <div className="relative lg:w-[400px] lg:mt-16">
          <div className="lg:absolute z-10">
            <h3 className="text-3xl">Work Along With Us</h3>
            <div className=" h-1 md:w-[300px] lg:w-full bg-white mt-5 mb-10"></div>
            <p className="">Are you looking for a remote, friendly, and flexible work environment? If you're eager to contribute to our startup culture , we want to hear from you. Send us your resume and a brief message at saikanepal@gmail.com</p>
            <button
              className="bg-white text-custom-blue mt-8 px-4 py-2"
              onClick={handleClick}
            >
              Copy Email
            </button>
          </div>
          <div className="absolute hidden lg:block lg:-top-20 lg:-left-28 w-[700px] z-0"><img src={bubbleImage} className="" /></div>
        </div>
        <div className="md-w-[400px]">
          {/* <lottie-player ref={animateRef} id="firstLottie" src='../assets/Animation - 1716823244101.json' controls
          mode="normal"
          
          style={{ width: '320px' }}></lottie-player> */}
          <Lottie id="firstLottie" animationData={internImage} />
        </div>

      </div>
    </div>
  );
};

export default Career;
