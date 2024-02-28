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
    <div className="max-w-[1240px]  rounded-md  text-black mx-auto grid md:grid-cols-2">
      <img
        className="w-[500px] mx-auto my-4 rounded-md"
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
