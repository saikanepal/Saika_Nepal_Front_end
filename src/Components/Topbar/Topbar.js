import React from "react";

const Topbar = ({ title }) => {
  return (
    <div>
      <p className="text-xl font-semibold mb-4">{title}</p>
    </div>
  );
};

export default Topbar;
