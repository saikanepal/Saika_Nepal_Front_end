import React from "react";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiMessageSquare, FiClipboard } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Management = () => {
  const menuItems = [
    { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "Employees", link: "/employees", icon: BsPeopleFill },
    { name: "Add User", link: "/add-user", icon: IoAddCircleOutline },
    { name: "Requests", link: "/tokens", icon: FiMessageSquare },
    { name: "Projects", link: "/projects", icon: FiClipboard },
    { name: "Settings", link: "/dashboard", icon: RiSettings4Line },
    
  ];
  
  const navigate = useNavigate();
  const handle_Navigate = (lnk) => {
    navigate(lnk);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out p-4 cursor-pointer"
          onClick={() => {
            /* Handle navigation here */
            handle_Navigate(menuItem.link);
          }}
        >
          <div className="flex items-center justify-center mb-4">
            {React.createElement(menuItem.icon, { size: 24 })}
          </div>
          <div className="text-center font-semibold">{menuItem.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Management;
