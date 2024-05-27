import React from "react";
import cutting from "../assets/cutting.png";
import customized from "../assets/customizedSolution.png";
import quality from "../assets/quality2.png";
import client from "../assets/client.png";

const YourWebsite = () => {
  return (
    <div className="bg-[#DBE2EF] mx-auto py-12 lg:h-[500px]">
      <div className="max-w-full mx-auto px-4 ">
        <h2 className="text-5xl font-bold text-gray-900 text-start mb-10  mx-auto lg:mx-10">
          Your <span className="text-[#3F72AF]">Website</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 mt-8 w-[90%] items-center -z-10  ">
          <div className="relative p-8 text-center flex flex-col items-center ">
            <img
              src={cutting}
              alt="Cutting-Edge Expertise"
              className="w-48 h-48 mb-6 relative z-10 bg-[#DBE2EF] p-8 "
            />
            <div className="absolute inset-x-0 bottom-0 top-1/2 border border-white rounded-lg p-4 flex flex-col justify-end items-center h-100">
              <h3 className="text-xl font-semibold py-4">
                Cutting-Edge Expertise
              </h3>
            </div>
          </div>
          <div className="relative p-8  text-center flex flex-col items-center">
            <img
              src={customized}
              alt="Customized Solution"
              className="w-48 h-48  mb-6 relative z-10 bg-[#DBE2EF] p-4 "
            />
            <div className="absolute inset-x-0 bottom-0 top-1/2 border border-white rounded-lg p-4 flex flex-col justify-end items-center">
              <h3 className="text-xl font-semibold py-4">
                Customized Solution
              </h3>
            </div>
          </div>
          <div className="relative p-8  text-center flex flex-col items-center">
            <img
              src={quality}
              alt="Commitment to Quality"
              className="w-48 h-48  mb-6 relative z-10 bg-[#DBE2EF] p-4 "
            />
            <div className="absolute inset-x-0 bottom-0 top-1/2 border border-white rounded-lg p-4 flex flex-col justify-end items-center">
              <h3 className="text-xl font-semibold py-4">
                Commitment to Quality
              </h3>
            </div>
          </div>
          <div className="relative p-8  text-center flex flex-col items-center">
            <img
              src={client}
              alt="Client Centric"
              className="w-48 h-48  mb-6 relative z-10 bg-[#DBE2EF] p-4 "
            />
            <div className="absolute inset-x-0 bottom-0 top-1/2 border border-white rounded-lg p-4 flex flex-col justify-end items-center">
              <h3 className="text-xl font-semibold py-4">Client Centric</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourWebsite;
