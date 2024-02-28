import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  const selectedProject = useSelector((state) => state.authState.selectedproject);
  const [editableFields, setEditableFields] = useState({});
  const navigate = useNavigate();

  const handleCheckboxChange = (field) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));

    // Initialize the field value in editableFields
    if (!editableFields[field]) {
      setEditableFields((prevState) => ({
        ...prevState,
        [field]: selectedProject[field],
      }));
    }
  };

  const handleInputChange = (e, field) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    // Perform update logic using editableFields state
    console.log("Updated fields:", editableFields);
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
          <div className="mb-4">
            <label className="font-semibold">Select fields to edit:</label>
            {Object.keys(selectedProject).map((field) => (
              <div key={field} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id={field}
                  name={field}
                  checked={editableFields[field] || false}
                  onChange={() => handleCheckboxChange(field)}
                />
                <label htmlFor={field} className="ml-2">
                  {field}
                </label>
              </div>
            ))}
          </div>
          {Object.keys(selectedProject).map(
            (field) =>
              editableFields[field] && (
                <div key={field} className="mb-4">
                  <label className="font-semibold">{field}:</label>
                  <input
                    type="text"
                    value={editableFields[field] || ""}
                    onChange={(e) => handleInputChange(e, field)}
                    className="border rounded-md w-full p-2 mt-1"
                  />
                </div>
              )
          )}
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
