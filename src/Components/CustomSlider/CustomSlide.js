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
    <div className="gap-5 py-4 rounded-lg max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img
        className="rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[500px] mx-auto my-4"
        src={src ? src : Laptop}
        alt="/"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold ">{title}</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {header}
        </h1>
        <p>{description}</p>
       
      </div>
    </div>
  );
};

export default CustomSlide;
