import React, { useEffect, useState } from "react";
import { FaCheck, FaUndo } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardWrapper from "../Components/Global/DashboardWrapper";
import request from "../Utils/HttpRequests";

const EditProject = () => {
  const token = useSelector((state) => state.authState.token);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const user = useSelector((state) => state.authState.user);
  const selectedProject = useSelector(
    (state) => state.authState.selectedproject
  );

  const [projectData, setProjectData] = useState(selectedProject);
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    if (!user || user.isAdmin !== "admin" || !selectedProject) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
    setEditedFields({ ...editedFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSuccessMessage("Changing .....")
      const response = await request.put(`/api/project/updateProject/${selectedProject._id}`, {
        editedFields
      }, request.generateConfigData("application/json", token));
      if (response.status) {
        setSuccessMessage("Successfully updated user.");
      } else {
        setSuccessMessage("Failed to Change");

      }
      // Handle success or show a notification
    } catch (error) {
      // Handle error or show a notification
      console.error("Error:", error);
    }
  };

  const handleReset = () => {
    setProjectData(selectedProject);
    setEditedFields({});
  };

  return (
    <DashboardWrapper>
      <div className="bg-gray-600 text-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl mb-4">Edit Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projecttitle" className="block mb-1">
              Project Title
            </label>
            <input
              type="text"
              id="projecttitle"
              name="projecttitle"
              value={projectData.projecttitle}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstname" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={projectData.firstname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={projectData.lastname}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phonenumber" className="block mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              value={projectData.phonenumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="githuburl" className="block mb-1">
              GitHub URL
            </label>
            <input
              type="text"
              id="githuburl"
              name="githuburl"
              value={projectData.githuburl}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="discordlink" className="block mb-1">
              Discord Link
            </label>
            <input
              type="text"
              id="discordlink"
              name="discordlink"
              value={projectData.discordlink}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="googledriveurl" className="block mb-1">
              Google Drive URL
            </label>
            <input
              type="text"
              id="googledriveurl"
              name="googledriveurl"
              value={projectData.googledriveurl}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={projectData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectfees" className="block mb-1">
              Project Fees
            </label>
            <input
              type="number"
              id="projectfees"
              name="projectfees"
              value={projectData.projectfees}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="advanceamount" className="block mb-1">
              Advance Amount
            </label>
            <input
              type="number"
              id="advanceamount"
              name="advanceamount"
              value={projectData.advanceamount}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="estimationtime" className="block mb-1">
              Estimation Time
            </label>
            <input
              type="text"
              id="estimationtime"
              name="estimationtime"
              value={projectData.estimationtime}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={projectData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          {/* Reset and Submit buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              <FaUndo className="mr-2" /> Reset
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              <FaCheck className="mr-2" /> Submit Changes
            </button>

            <div className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
              {successMessage}
            </div>

          </div>
        </form>
      </div>
    </DashboardWrapper>
  );
};

export default EditProject;
