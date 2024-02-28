import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  // Define state variables for each input field
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  const selectedProject = useSelector(
    (state) => state.authState.selectedproject
  );

  useEffect(() => {
    console.log(selectedProject);
    if (user && user.isAdmin !== "admin") navigate("/dashboard");
    if (selectedProject === null) navigate("/dashboard");
  }, []);
  return (
    selectedProject && (
      <div className="flex justify-center items-center h-full">
Hello 
      </div>
    )
  );
};

export default EditProject;
