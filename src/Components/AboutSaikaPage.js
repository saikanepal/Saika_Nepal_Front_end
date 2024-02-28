import React from "react";
import { ReactTyped } from "react-typed";

const AboutSaikaPage = ({contactRef}) => {
  return (
    <div className="text-white bg-[#000300] ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold p-2">
          A Nepal Based Startup
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-3">
          Ignite Success with us: Your Digital Spark!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-xl text-lg font-bold py-4">
            Scalable Solutions for
          </p>
          <ReactTyped
            className='md:text-3xl sm:text-xl text-lg font-bold md:pl-4 pl-2'
            strings={['Web Applications', 'Mobile Applications', 'Database Management', 'Deployment', 'Maintenance', 'Upgrades']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="md:text-lg text-base font-bold text-gray-400">

            Saika Nepal is your go-to startup for all things web-related. From creating user-friendly websites/webapps to streamlining data management, we're here to simplify your online presence. With us, innovation meets simplicity, ensuring your digital journey is smooth and successful. Join us at Saika Nepal and let's make your web dreams a reality.
          </p>
        </div>
        <button onClick={
            ()=>{
            contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
        } className="bg-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutSaikaPage;
