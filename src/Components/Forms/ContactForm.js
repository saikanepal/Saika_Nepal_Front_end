import React, { useState } from "react";
import TransitionAlerts from "../Alerts/TransitionAlerts";
import { ImSpinner8 } from "react-icons/im";
import request from "../../Utils/HttpRequests";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import bgBubbleImage from "../../assets/backGroundBubble.png"
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
    referencecode: "" // New field for reference code
  });
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstname, lastname, email, phonenumber, message, referencecode } = formData;
      if (!firstname || !lastname || !email || !phonenumber || !message)
        throw new Error("All fields required");
      console.log(formData);
      setIsLoading(true);
      const response = await request.post(
        "/api/request/createrequest",
        formData,
        request.generateConfigData()
      );
      if (response.status !== true) throw new Error(response.message);
      setTimeout(() => {
        setIsLoading(false);
        setOpen(true);
        setStatus(true);
        setNotificationMessage(
          "Thank you for contacting, we will get back to you soon !!"
        );
      }, 2000);
      // Add logic to submit form data
    } catch (error) {
      setStatus(false);
      setOpen(true);
      setIsLoading(false);
      setNotificationMessage(error.message);
    }
  };

  return (
    <div className="w-full py-10 sm:py-16 px-4 sm:px-16 relative overflow-hidden text-white font-roboto bg-[#3F72AF]">
      <div className="w-max-[1240px] gap-5 mx-auto grid lg:grid-cols-2">
        <div className="text-lg flex flex-col gap-2 sm:gap-10 lg:gap-16 whitespace-normal my-4">
          <h1 className="md:text-5xl sm:text-3xl text-3xl sm:tracking-wide font-bold py-2">
            GET IN TOUCH WITH US
          </h1>
          <h1 className="md:text-5xl sm:text-3xl tracking-wide text-2xl font-bold py-2">
            <div className="flex flex-col sm:gap-2">
              <div className="text-[#94B5EF]">LETS CHANGE AN IDEA </div>
              <div> <span className="text-[#94B5EF]">INTO A </span>REALITY</div>
            </div>
          </h1>
          <div className="hidden lg:flex lg:flex-col gap-5 text-[#BCD4FF] text-lg sm:text-xl">
            <span className="flex gap-10 items-center "><FaPhoneAlt />9702781000</span>
            <a href="mailto:saikanepal@gmail.com" className="flex gap-10 items-center"><LuMail />saikanepal@gmail.com</a>
          </div>
          <div className="hidden lg:flex gap-5 text-[#BCD4FF]">
            <a href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={25} /></a>
            <a href="https://www.linkedin.com/company/103794010/" target="_blank"><FaInstagram size={25} /></a>
            <a href="https://www.instagram.com/saikanepal/" target="_blank"><FaLinkedinIn size={25} /></a>
            <a href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={25} /></a>
          </div>
        </div>
        <div className="my-2 sm:my-4 lg:w-[80%] w-full justify-self-end">
          <div className="bg-white rounded-2xl p-6 sm:p-10 ">
            <form className="space-y-2 md:space-y-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <label
                    htmlFor="firstname"
                    className="block text-lg w-full font-bold text-[#3F72AF] mb-1"
                  >
                    First Name
                  </label>
                  <label
                    htmlFor="lastname"
                    className="hidden sm:block text-lg w-full font-bold text-[#3F72AF] mb-1"
                  >
                    Last Name
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="pt-3 w-full border-b-2 sm:border-b-4 border-[#93B4EF] text-black focus:outline-none"
                    required
                  />
                  <label
                    htmlFor="lastname"
                    className="sm:hidden block text-lg w-full font-bold text-[#3F72AF] mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="sm:pt-3 w-full border-b-2 sm:border-b-4 border-[#93B4EF] text-black focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-[#3F72AF] mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="pt-3 w-full border-b-2 sm:border-b-4 border-[#93B4EF] text-black focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phonenumber"
                  className="block text-lg font-bold text-[#3F72AF] mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenumber"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="pt-3 w-full border-b-2 sm:border-b-4 border-[#93B4EF] text-black focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="referencecode"
                  className="block text-lg font-bold text-[#3F72AF] mb-1"
                >
                  Promo Code (Optional)
                </label>
                <input
                  type="text"
                  id="referencecode"
                  name="referencecode"
                  value={formData.referencecode}
                  onChange={handleChange}
                  placeholder="98-XXXXXXX"
                  className="pt-3 w-full border-b-2 sm:border-b-4 border-[#93B4EF] text-black focus:outline-none"
                />
              </div>


              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold text-[#3F72AF] mb-5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-36 sm:h-48 pt-3 w-full border-2 sm:border-4 rounded-xl border-[#93B4EF] text-black focus:outline-none resize-none"
                  required
                ></textarea>


              </div>

              <button
                type="submit"
                className={`w-full text-white bg-[#7eadff] ${isLoading && "hover:bg-none"} hover:bg-[#3F72AF] focus:ring-4 focus:outline-none focus:ring-[##3F72AF] font-bold rounded-lg text-lg px-5 py-2.5 text-center`}
                disabled={isLoading}
              >
                {isLoading ? <ImSpinner8 className="animate-spin mx-auto" /> : "Submit"}
              </button>
              <TransitionAlerts

                msg={notificationMessage}
                open={open}
                setOpen={setOpen}
                status={status}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="mt-16 pl-2 flex flex-col sm:flex-row gap-5 justify-between">
        <div className="lg:hidden flex flex-col gap-3 text-[#BCD4FF] text-md tracking-wide sm:text-xl">
          <span className="flex gap-5 sm:gap-5 items-center "><FaPhoneAlt />9702781000</span>
          <span className="flex gap-5 sm:gap-5 items-center"><LuMail />saikanepal@gmail.com</span>
        </div>
        <div className="lg:hidden flex gap-5 sm:gap-5 text-[#BCD4FF]">
          <a href="https://discord.gg/rjuUH7jW" target="_blank"><FaDiscord size={25} /></a>
          <a href="https://www.linkedin.com/company/103794010/" target="_blank"><FaInstagram size={25} /></a>
          <a href="https://www.instagram.com/saikanepal/" target="_blank"><FaLinkedinIn size={25} /></a>
          <a href="https://www.facebook.com/profile.php?id=61557187132667" target="_blank"><FaFacebookF size={25} /></a>
        </div>

      </div>
      <img src={bgBubbleImage} alt='Background Bubble' style={{ height: '500px' }} className='hidden lg:block absolute top-[10%] 
      right-[38%]' />

      <img src={bgBubbleImage} alt='Background Bubble' style={{ height: '500px' }} className='hidden lg:block absolute -rotate-90 left-[20%] bottom-[10%]' />

    </div >
  );
};

export default ContactForm;
