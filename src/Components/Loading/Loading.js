import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
      <Lottie

        animationData={loadingAnimation}

      />
    </div>
  );
};

export default Loading;
