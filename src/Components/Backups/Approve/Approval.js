import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import ProjectClientCard from "./ProjectClientCard";

const Approval = () => {
  // Define state variables for each input field
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  /* get selected request  */
  const selectedrequest = useSelector(
    (state) => state.authState.selectedrequest
  );

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
  const [isLoading, setIsLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (user && user.isAdmin !== "admin") navigate("/dashboard");
    if (selectedrequest === null) navigate("/dashboard");
  }, []);
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
            />
          )}

          <form className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="approvedBy" className="font-semibold">
                  Approved By:
                </label>
                <input
                  type="text"
                  id="approvedBy"
                  value={approvedBy}
                  onChange={(e) => setApprovedBy(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="githubUrl" className="font-semibold">
                  Github URL:
                </label>
                <input
                  type="text"
                  id="githubUrl"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="googleDriveUrl" className="font-semibold">
                  Google Drive URL:
                </label>
                <input
                  type="text"
                  id="googleDriveUrl"
                  value={googleDriveUrl}
                  onChange={(e) => setGoogleDriveUrl(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="discordLink" className="font-semibold">
                  Discord Link:
                </label>
                <input
                  type="text"
                  id="discordLink"
                  value={discordLink}
                  onChange={(e) => setDiscordLink(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="projectFees" className="font-semibold">
                  Project Fees:
                </label>
                <input
                  type="number"
                  id="projectFees"
                  value={projectFees}
                  onChange={(e) => setProjectFees(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="advanceAmount" className="font-semibold">
                  Advance Amount:
                </label>
                <input
                  type="number"
                  id="advanceAmount"
                  value={advanceAmount}
                  onChange={(e) => setAdvanceAmount(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="estimationTime" className="font-semibold">
                  Estimation Time:
                </label>
                <input
                  type="text"
                  id="estimationTime"
                  value={estimationTime}
                  onChange={(e) => setestimationTime(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="projectTitle" className="font-semibold">
                  Project Title:
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="block w-full border-gray-300 rounded-md mt-1 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Approval;
