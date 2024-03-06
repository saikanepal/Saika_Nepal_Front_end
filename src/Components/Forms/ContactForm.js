import React, { useState } from "react";
import TransitionAlerts from "../Alerts/TransitionAlerts";
import Loading from "../Loading/Loading";
import request from "../../Utils/HttpRequests";

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
          "Thank you for contacting us, we Have Received Your Request we will get back to you soon !!"
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
    <div className="w-full py-16 text-gray-300 px-4 bg-[#000300]">
      <div className="max-w-[1240px] gap-10 mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 text-lg whitespace-normal my-4">
          <h1 className="hover:bg-[#12372A] md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-serif">
            Wanna get in touch with us?
          </h1>
          <p
            className=" hover:bg-[#12372A] "
            style={{ whiteSpace: "pre-line" }}
          >
            We invite you to connect with us by filling out the form below.
            Whether you have questions, need more information, or are interested
            in our services, we're here to help. Our team is committed to
            providing timely responses, and we aim to get back to you within 24
            hours.
          </p>
        </div>
        <div className="my-4">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 flex w-full rounded-md text-black"
                required
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 flex w-full rounded-md text-black"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 flex w-full rounded-md text-black"
              required
            />
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 flex w-full rounded-md text-black"
              required
            />
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 flex w-full rounded-md text-black"
              required
            ></textarea>
            <input
              type="text"
              name="referencecode"
              value={formData.referencecode}
              onChange={handleChange}
              placeholder="Reference Code (OPTIONAL)"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button
              type="submit"
              className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-800"
            >
              Submit
            </button>

            {isLoading && <Loading />}
            <TransitionAlerts
              msg={notificationMessage}
              open={open}
              setOpen={setOpen}
              status={status}
            />
          </form>
          <p className="text-green-400">
            Your personal Data is secured with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
