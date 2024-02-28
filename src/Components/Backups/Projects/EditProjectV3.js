import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSelectedProject } from "../redux/actions";

const EditProject = () => {
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  const selectedProject = useSelector(
    (state) => state.authState.selectedproject
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e, field) => {
    const updatedProject = { ...selectedProject, [field]: e.target.value };
    dispatch(updateSelectedProject(updatedProject));
  };

  const handleUpdate = () => {
    // Perform update logic using selectedProject state
    console.log("Updated project:", selectedProject);
  };

  useEffect(() => {
    if (!user || user.isAdmin !== "admin" || !selectedProject) {
      navigate("/dashboard");
    }
  }, [user, selectedProject, navigate]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Project Details Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          {Object.keys(selectedProject).map((field) => (
            <div key={field} className="flex items-center">
              <span className="mr-2 font-semibold">{field}:</span>
              <span>{selectedProject[field]}</span>
            </div>
          ))}
        </div>
        {/* Update Project Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Update Project</h2>
          {Object.keys(selectedProject).map((field) => (
            <div key={field} className="mb-4">
              <label className="font-semibold">{field}:</label>
              <input
                type="text"
                value={selectedProject[field]}
                onChange={(e) => handleInputChange(e, field)}
                className="border rounded-md w-full p-2 mt-1"
              />
            </div>
          ))}
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
          >
            <FaCheck className="mr-2" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
