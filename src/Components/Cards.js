import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import CustomSlider from "./CustomSlider/CustomSlider";

const Cards = () => {
  return (
    <div className="p-10 w-full py-[10rem] px-10 bg-white">
      <p className="mb-3 text-[#b54b9f] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-4xl">
        Our Plans At Saika Tech
      </p>
      <div className="relative">
        <CustomSlider>
          <div className="w-full shadow-xl flex flex-col p-14 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            /> */}
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
                Start Trial
              </button>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-14 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            /> */}
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">
                Start Trial
              </button>
            </div>
          </div>
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

export default Cards;
