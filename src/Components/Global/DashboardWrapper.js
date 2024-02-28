import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SideBarMy from "../Sidebar/SideBarMy";

const DashboardWrapper = ({ children }) => {
  const user = useSelector((state) => state.authState.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/admin");
  }, [navigate, user]);

  return (
    user && (
      <div className="flex">
        {/* my side bar */}
        <SideBarMy />
        <div className="flex-1 border border-gray-400">
          {/* Adjust ml (margin-left) based on your sidebar width */}
          {/* <p className="text-xl font-semibold mb-4">Title</p> */}
          {children}
        </div>
      </div>
    )
  );
};

export default DashboardWrapper;
