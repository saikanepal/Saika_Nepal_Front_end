import React from "react";
import { Link } from "react-router-dom";

const Copyright = (props) => {
  return (
    <p className="text-sm text-gray-500 text-center" {...props}>
      {"Copyright © "}
      <Link className="text-blue-500 hover:underline" to="https://www.savonia.fi">
        SaikaNepal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
};

export default Copyright;
