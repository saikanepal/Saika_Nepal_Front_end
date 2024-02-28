import React from "react";

export default function TransitionAlerts({
  open,
  setOpen,
  msg,
  status = true,
}) {
  return (
    <div className="w-full">
      {open && (
        <div className="mb-2">
          <div
            className={`flex justify-between items-center  p-1 ${
              status ? "text-green-500" : "text-red-500"
            } `}
            role="alert"
          >
            <p>{msg}</p>
            <button
              type="button"
              className="px-4 py-3"
              onClick={() => {
                setOpen(false);
              }}
            >
              <svg
                className={`h-6 w-6 ${
                  status ? "text-green-500" : "text-red-500"
                } `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
