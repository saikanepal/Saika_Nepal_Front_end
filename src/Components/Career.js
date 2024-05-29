import React,{useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CareerSlide from "./CustomSlider/CareerSlide";
import internImage from "../assets/Animation - 1716823244101.json"
import joinUs from "../assets/joinus.gif"
import Lottie from "lottie-react";
// import { create } from '@lottiefiles/lottie-interactivity';
const Career = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const animateRef=useRef();
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
    <div className="bg-blue-50 flex flex-col items-center justify-center py-10 text-white">
      <h2 className="text-5xl font-bold mb-16 text-[#112D4E] text-center">Be a Part Of Our Team</h2>
        <div className="w-5/6 bg-[#3F72AF] flex flex-col lg:flex-row justify-around items-center lg:items-start p-10">
          <div className="lg:w-[400px] mt-16">
            <h3 className="text-3xl">Work Along With Us</h3>
            <div className="h-1 bg-white mt-5 mb-10"></div>
            <p>Explore remote, friendly, flexible opportunity and join our mission to make things possible.</p>
            <button
            className="bg-white text-custom-blue mt-5 px-4 py-2"
            onClick={handleClick}
          >
            Copy Email
          </button>
          </div>
          <div className="md:w-[400px]">
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
