import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
      {message}
    </div>
  );
};

export default Loading;
