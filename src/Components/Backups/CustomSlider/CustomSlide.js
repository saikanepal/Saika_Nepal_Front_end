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
  projectflag = false,
  projecturl = "http://youtube.com",
}) => {
  return (
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img
        className="w-[500px] mx-auto my-4"
        src={src ? src : Laptop}
        alt="/"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold ">{title}</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {header}
        </h1>
        <p>{description}</p>
        <button className="bg-black text-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CustomSlide;
