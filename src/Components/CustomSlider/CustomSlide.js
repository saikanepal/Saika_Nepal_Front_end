import React from "react";
import Laptop from "../../assets/laptop.jpg";

const CustomSlide = ({
  title = "DATA ANALYTICS DASHBOARD",
  header = " Manage Data Analytics Centrally",
  description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
  autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
  ex deserunt fuga?`,
  src,
  projectFlag = false,
  projectUrl = "http://youtube.com",
}) => {
  const handleClick = () => {
    if (projectFlag) {
      window.open(projectUrl, "_blank");
    } else {
      // Handle the default action here
    }
  };

  return (
    <div className="lg:gap-5 py-4 rounded-lg mx-auto grid text-center lg:text-left lg:grid-cols-2 justify-around">
  <img
    className="rounded-lg lg:rounded-tl-[180px] h-[200px] lg:h-[350px] 2xl:h-[500px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto my-4"
    src={src ? src : Laptop}
    alt="/"
  />
  <div className="lg:mt-5 flex flex-col items-center">
    <div className="">
    <p className="text-[#b54b9f] hidden lg:block font-bold text-custom-blue 2xl:text-2xl font-Saira">{title}</p>
    <h1 className="md:text-4xl sm:text-3xl text-2xl 2xl:text-6xl font-bold py-2">{header}</h1>
    <p className="hidden lg:block mt-12 text-custom-blue 2xl:text-2xl">{description}</p>
    </div>
  </div>
</div>

  );
};

export default CustomSlide;
