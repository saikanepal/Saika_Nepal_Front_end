import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import Header from "../Header/Header";
import { createColumnHelper } from "@tanstack/react-table";
import { useSelector } from "react-redux";
import request from "../../Utils/HttpRequests";
import {
  FaUserCog,
  FaUserGraduate,
  FaUserTie,
  FaUserSecret,
} from "react-icons/fa";
import Loading from "../Loading/Loading";
import MyTable from "../MyTable/MyTable";
import downloader from "../../Utils/Dowload";
const Employees = () => {
  const columnHelper = createColumnHelper();
  // user config
  const token = useSelector((state) => state.authState.token);
  const user = useSelector((state) => state.authState.user);
  /* the template for loading and notifications */
  const [isloading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  /* Fetch all the team users */

  const fetch_ALL_Users = async () => {
    try {
      setLoading(true);
      const data = await request.get(`/api/user/getallusers`, {
        Authorization: token,
      });
   
      if (data.status === false) throw new Error(data.message);
      setLoading(false);
      setUsers(data.message.users);
    } catch (error) {
      setLoading(false);
    }
  };

  const columns = [
    columnHelper.accessor("_id", { header: "ID" }),
    columnHelper.accessor("firstname", { header: "First Name" }),
    columnHelper.accessor("lastname", { header: "Last Name" }),
    columnHelper.accessor("phonenumber", { header: "Phone Number" }),
    columnHelper.accessor("username", { header: "UserName" }),
    {
      id: "userclass",
      header: "Status",
      cell: (info) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-6 w-6 mr-2 mt-1">
            {info.row.original.userclass === "admin" && (
              <FaUserSecret className="text-red-500 mt-0.5" />
            )}
            {(info.row.original.userclass === "senior" ||
              info.row.original.userclass === "Senior") && (
              <FaUserTie className="text-yellow-500 mt-0.5" />
            )}
            {info.row.original.userclass === "junior" && (
              <FaUserGraduate className="text-green-500 mt-0.5" />
            )}
            {info.row.original.userclass === "intern" && (
              <FaUserGraduate className="text-blue-500 mt-0.5" />
            )}
          </div>
          <span className="text-sm font-medium">
            {info.row.original.userclass}
          </span>
        </div>
      ),
    },
  ];
  const [tableColumns, setTableColumns] = useState(columns);
  useEffect(() => {
    fetch_ALL_Users();
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <div className="p-5">
          <Header title={"Team"} />
          <div className="bg-[#000300]">
            {loading ? (
              <Loading />
            ) : (
              <MyTable
                columns={tableColumns}
                data={users}
                handleDownload={downloader.download}
              />
            )}
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Employees;
