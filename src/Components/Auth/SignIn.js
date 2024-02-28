import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPageState, setToken, setUser } from "../../Slices/authSlice";
import request from "../../Utils/HttpRequests";
import { useNavigate } from "react-router-dom";
import TransitionAlerts from "../Alerts/TransitionAlerts";
import Copyright from "../CopyRight/Copyright";
import Loading from "../Loading/Loading";

export default function SignIn() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      setIsLoading(true);
      const data = new FormData(event.currentTarget);
      const username = data.get("email");
      const password = data.get("password");
      if (!username || !password) throw new Error("ALL FIELDS REQUIRED");
      const payload = { username: username, password: password };
      const response = await request.post(
        "/api/user/login",
        payload,
        request.generateConfigData()
      );
      if (response && response.status !== true)
        throw new Error(response.message);

      dispatch(setUser(response.message.user));
      dispatch(setToken(response.message.token));
      setTimeout(() => {
        setIsLoading(false);
        setNotificationMessage("SignIn Sucessfull");
        setOpen(true);
        setStatus(true);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setNotificationMessage(error.message);
      setOpen(true);
      setStatus(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 border min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:text-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password? Please Contact admin
                  </a>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
