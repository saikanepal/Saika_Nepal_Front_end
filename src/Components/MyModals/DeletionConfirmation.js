import React from "react";

const DeletionConfirmation = ({ showConfirmDelete, handleConfirmDelete }) => {
  return (
    showConfirmDelete && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md">
          <p className="mb-4">Are you sure you want to delete this request?</p>
          <div className="flex justify-end">
            <button
              onClick={(e) => handleConfirmDelete(true)}
              className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
            >
              Yes
            </button>
            <button
              onClick={(e) => {
                handleConfirmDelete(false);
              }}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeletionConfirmation;
