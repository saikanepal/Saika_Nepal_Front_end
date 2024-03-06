import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import ProjectClientCard from "./ProjectClientCard";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import DeletionConfirmation from "../MyModals/DeletionConfirmation";
import { setSelectedRequest } from "../../Slices/authSlice";
import request from "../../Utils/HttpRequests";
import Loading from "../Loading/Loading";
import TransitionAlerts from "../Alerts/TransitionAlerts";
import Confirmation from "../MyModals/Confirmation";

const Approval = () => {
  // Define state variables for each input field
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  /* get selected request  */
  const selectedrequest = useSelector(
    (state) => state.authState.selectedrequest
  );
  console.log(selectedrequest);

  /* dispatch */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [approvedBy, setApprovedBy] = useState(user.username);
  const [githubUrl, setGithubUrl] = useState("www.github.com");
  const [googleDriveUrl, setGoogleDriveUrl] = useState("www.googledrive.com");
  const [discordLink, setDiscordLink] = useState("www.discord.com");
  const [projectFees, setProjectFees] = useState(25000.5);
  const [advanceAmount, setAdvanceAmount] = useState(5000);
  const [estimationTime, setestimationTime] = useState("3 months");
  const [projectTitle, setProjectTitle] = useState("Dental App");
  /* Notification */
  const [isloading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [referencecode,setreferencecode] = useState("");
  
  useEffect(() => {
    if (user && user.isAdmin !== "admin") navigate("/dashboard");
    if (selectedrequest === null) navigate("/dashboard");
  }, []);

  // logic for rejecting the row data
  const handleReject = async (userrequest) => {
    try {
      setIsLoading(true);
      const deleteresponse = await request.delete(
        `/api/request/deleterequest/${userrequest._id}`,
        request.generateConfigData("application/json", token)
      );
      

      if (deleteresponse.status !== true) {
        throw new Error(deleteresponse.message);
      }

      setTimeout(() => {
        setOpen(true);
        setStatus(true);
        setNotificationMessage("Request Deleted");
        setIsLoading(false);
        navigate("/tokens");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setOpen(false);
      setStatus(false);
      setNotificationMessage(error.message);
    }
  };

  const handleDelete = async (e) => {
    handleReject(selectedrequest);
  };

  const confirmDelete = (e) => {
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = (confirmed) => {
    
    if (confirmed) handleDelete();
    setShowConfirmDelete(false);
  };
  /* Approve project */
  const handleApprove = async (e) => {
    try {
      if (!projectTitle || !githubUrl || !googleDriveUrl || !discordLink)
        throw new Error("All fields requried");
      setIsLoading(true);
      const bodydata = {
        projecttitle: projectTitle,
        firstname: selectedrequest.firstname,
        lastname: selectedrequest.lastname,
        email: selectedrequest.email,
        phonenumber: selectedrequest.phonenumber,
        githuburl: githubUrl,
        googledriveurl: googleDriveUrl,
        approvedby: user._id,
        projectfees: projectFees,
        advanceamount: advanceAmount,
        estimationtime: estimationTime,
        discordlink: discordLink,
        referencecode: selectedrequest.referencecode
      };
      const response = await request.post(
        "/api/project/createproject",
        bodydata,
        request.generateConfigData("application/json", token)
      );
      if (response.status !== true) throw new Error(response.message);
      
      if (response.status === true) {
        /* Delete the approved request */
        const deleteresponse = await request.delete(
          `/api/request/deleterequest/${selectedrequest._id}`,
          request.generateConfigData("application/json", token)
        );
        
      }
      setTimeout(() => {
        setOpen(true);
        setStatus(true);
        setIsLoading(false);
        setNotificationMessage("Project Approved");
        setTimeout(() => {
            navigate('/projects')
        }, 2000);
      }, 2000);
    } catch (error) {
      setOpen(false);
      setIsLoading(false);
      setStatus(false);
      setNotificationMessage(error.message);
    }
  };

  const handleCancel = async (e) => {
    dispatch(setSelectedRequest(null));
    navigate("/dashboard");
  };

  return (
    <DashboardWrapper>
      <div className="p-5">
        <Header title={"Approve"} />
        <div>
          {selectedrequest && (
            <ProjectClientCard
              firstName={selectedrequest.firstname}
              lastName={selectedrequest.lastname}
              email={selectedrequest.email}
              phoneNumber={selectedrequest.phonenumber}
              approvedBy={approvedBy}
              projectFees={projectFees}
              githubUrl={githubUrl}
              googleDriveUrl={googleDriveUrl}
              estimationTime={estimationTime}
              discordLink={discordLink}
              projectTitle={projectTitle}
              advanceAmount={advanceAmount}
              message={selectedrequest.message}
              referencecode={selectedrequest.referencecode}
            />
          )}
          {/* Approval form */}
          <form className="bg-white shadow-md rounded-md p-4 mb-4">
            <div className="flex flex-wrap -mx-4 mb-4">
              {/* Approved By */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="approvedBy"
                  className="block text-sm font-medium text-gray-700"
                >
                  Approved By
                </label>
                <input
                  type="text"
                  id="approvedBy"
                  value={approvedBy}
                  onChange={(e) => setApprovedBy(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* GitHub URL */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="githubUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  GitHub URL
                </label>
                <input
                  type="text"
                  id="githubUrl"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Google Drive URL */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="googleDriveUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Google Drive URL
                </label>
                <input
                  type="text"
                  id="googleDriveUrl"
                  value={googleDriveUrl}
                  onChange={(e) => setGoogleDriveUrl(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Discord Link */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="discordLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discord Link
                </label>
                <input
                  type="text"
                  id="discordLink"
                  value={discordLink}
                  onChange={(e) => setDiscordLink(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Project Fees */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="projectFees"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Fees
                </label>
                <input
                  type="number" // Change type to "number"
                  id="projectFees"
                  value={projectFees}
                  onChange={(e) => setProjectFees(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Advance Amount */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="advanceAmount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Advance Amount
                </label>
                <input
                  type="number" // Change type to "number"
                  id="advanceAmount"
                  value={advanceAmount}
                  onChange={(e) => setAdvanceAmount(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Estimation Time */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="estimationTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estimation Time
                </label>
                <input
                  type="text"
                  id="estimationTime"
                  value={estimationTime}
                  onChange={(e) => setestimationTime(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Project title  */}
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  htmlFor="projectTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="text"
                  id="referencecode"
                  value={referencecode}
                  onChange={(e) => setreferencecode(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="referencecode"
                />
              </div>
            </div>
          </form>
          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleApprove}
              className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md mr-2 transition duration-300 ease-in-out hover:bg-green-600"
            >
              <FaCheck className="mr-1" />
              Approve
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center justify-center bg-yellow-500 text-white py-2 px-4 rounded-md mr-2 transition duration-300 ease-in-out hover:bg-yellow-600"
            >
              <FaTimes className="mr-1" />
              Cancel Approval
            </button>
            <button
              onClick={confirmDelete}
              className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-red-600"
            >
              <FaTrash className="mr-1" />
              Delete Request
            </button>
          </div>

          {/* Deletetion Approval */}
          <Confirmation
            isOpen={showConfirmDelete}
            title="Are You Sure You Want to Delete"
            onCancel={handleConfirmDelete}
            onConfirm={handleConfirmDelete}
          />
        </div>
        <div className="mt-2">
          {isloading && <Loading />}
          <TransitionAlerts
            msg={notificationMessage}
            open={open}
            setOpen={setOpen}
            status={status}
          />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Approval;
