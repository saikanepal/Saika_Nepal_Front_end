import React from "react";

const ProjectClientCard = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  approvedBy,
  projectFees,
  githubUrl,
  googleDriveUrl,
  estimationTime,
  discordLink,
  projectTitle,
  advanceAmount,
  message,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">
        Project Details - {projectTitle}
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-2">
          <p>
            <span className="font-semibold">Client Name:</span> {firstName}{" "}
            {lastName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span> {phoneNumber}
          </p>
          <p>
            <span className="font-semibold">Message:</span> {message}
          </p>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <p>
            <span className="font-semibold">Approved By:</span> {approvedBy}
          </p>
          <p>
            <span className="font-semibold">Project Fees:</span> {projectFees}
          </p>
          <p>
            <span className="font-semibold">Github URL:</span> {githubUrl}
          </p>
          <p>
            <span className="font-semibold">Google Drive URL:</span>{" "}
            {googleDriveUrl}
          </p>
          <p>
            <span className="font-semibold">Estimation Time:</span>{" "}
            {estimationTime}
          </p>
          <p>
            <span className="font-semibold">Discord Link:</span> {discordLink}
          </p>
          <p>
            <span className="font-semibold">Advance Amount:</span>{" "}
            {advanceAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectClientCard;
