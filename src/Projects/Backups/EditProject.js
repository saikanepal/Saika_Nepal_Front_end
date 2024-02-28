import { useEffect, useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  const user = useSelector((state) => state.authState.user);
  const token = useSelector((state) => state.authState.token);
  const selectedProject = useSelector(
    (state) => state.authState.selectedproject
  );
  const [editableFields, setEditableFields] = useState({});
  const navigate = useNavigate();
  const contentEditableRefs = useRef({});

  const handleCheckboxChange = (field) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleContentEditableChange = (e, field) => {
    const value = e.currentTarget.textContent;
    setEditableFields((prevState) => ({
      ...prevState,
      [field]: value,
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
  }, []);

  return (
    selectedProject && (
      <div className="flex justify-center items-center h-full">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
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
          {Object.keys(selectedProject).map((field) =>
            editableFields[field] ? (
              <div key={field} className="mb-4">
                <label className="font-semibold">{field}:</label>
                <div
                  contentEditable
                  ref={(el) => (contentEditableRefs.current[field] = el)}
                  onInput={(e) => handleContentEditableChange(e, field)}
                  className="border rounded-md w-full p-2 mt-1"
                  dangerouslySetInnerHTML={{ __html: selectedProject[field] }}
                />
              </div>
            ) : null
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
    )
  );
};

export default EditProject;
