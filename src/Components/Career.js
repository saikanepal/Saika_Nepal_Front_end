import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CareerSlide from "./CustomSlider/CareerSlide";
import internImage from "../assets/Student.webp"
import joinUs from "../assets/joinus.gif"

const Career = () => {
  return (
    <div className="bg-white p-16">
      <p className="mb-3 text-[#F72798] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Job Openings
      </p>
      <div className="mt-2 relative">
        <CustomSlider>
          <CareerSlide
            title="Web Developer Student Intern"
            header="Starting only 3-4 hours per day paid Internship"
            description="Are you a passionate student or recent graduate majoring in Computer Science, Software Engineering, Computer Engineering, or related fields? We're seeking talented individuals to join our team as a web developer Intern. This is a great opportunity to gain valuable hands-on experience and grow your skills in a dynamic work environment."
            src={
              internImage
            }
            projectFlag={true}
            jobURL="https://forms.gle/dQN4REGfViXUzhYMA"
          />


          <CareerSlide
            title="Be a part of the team"
            header="Want to be part of the team?"
            description="If you have skills or ideas you believe could benefit our organization, don't hesitate to reach out. Email us at career@saikanepal.com"
            src={
              joinUs
            }
            projectFlag={false}
            
          />
        </CustomSlider>
        {/* <style>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
        `}</style> */}
      </div>
    </div>
  );
};

export default Career;
