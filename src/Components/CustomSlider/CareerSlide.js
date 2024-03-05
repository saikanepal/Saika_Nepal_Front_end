import React,{useState} from "react";
import Laptop from "../../assets/laptop.jpg";

const CareerSlide = ({
  title = "TITLE",
  header = " HEADEWR",
  description = `opening`,
  src,
  projectFlag = false,
  jobURL = "http://youtube.com",
}) => {
const [emailCopied, setEmailCopied] = useState(false);

  const handleClick = () => {
    if (projectFlag) {
      window.open(jobURL, "_blank");
    } else {
      const emailAddress = 'career@saikanepal.com';

      // Copy email address to clipboard
      navigator.clipboard.writeText(emailAddress)
        .then(() => {
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000); // Reset copied state after 2 seconds
        })
        .catch((error) => console.error('Failed to copy email: ', error));
  
      // Open Gmail in a new tab
      window.open(`mailto:${emailAddress}`);
    }
  };

  return (
    <div className=" gap-5 max-w-[1240px]  rounded-md  text-black mx-auto grid md:grid-cols-2">
      <img
        className=" w-[500px] mx-auto my-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl"
        src={src ? src : Laptop}
        alt="/"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold ">{title}</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
          {header}
        </h1>
        <p className=" text-black">{description}</p>
        {projectFlag ? (
          <button
            className="bg-black text-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={handleClick}
          >
            Apply Now
          </button>
        ) : (
          <button
            className="bg-black text-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
            onClick={handleClick}
          >
            Copy Email
          </button>
        )}
      </div>
    </div>
  );
};

export default CareerSlide;
