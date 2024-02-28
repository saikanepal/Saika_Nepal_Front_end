import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import Header from "../Header/Header";
import { createColumnHelper } from "@tanstack/react-table";
import MyTable from "../MyTable/MyTable";
import { FaCheck, FaTimes } from "react-icons/fa";
import request from "../../Utils/HttpRequests";
import { useSelector } from "react-redux";
const Tokens = () => {
  const columnHelper = createColumnHelper();
  // user config
  const token = useSelector((state) => state.authState.token);
  const user = useSelector((state) => state.authState.user);
  /* the template for loading and notifications */
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [data, setData] = useState([]);
  const [tableColumns, setTableColumns] = useState([])
  /* Function to Fetch All the request */
  const fetch_ALL_Requests = async () => {
    try {
      setLoading(true);
      const data = await request.get(`/api/request/getallrequests`, {
        Authorization: token,
      });

      if (data.status === false) throw new Error(data.message);
      setLoading(false);
      setData(data.message);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch_ALL_Requests();
  }, []);
  const columns = [
    columnHelper.accessor("_id", { header: "ID" }),
    columnHelper.accessor("firstname", { header: "First Name" }),
    columnHelper.accessor("lastname", { header: "Last Name" }),
    columnHelper.accessor("phonenumber", { header: "Phone Number" }),
    columnHelper.accessor("message", { header: "Message" }),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor("pending", { header: "Pending" }),
    columnHelper.accessor("createdAt", { header: "Created At" }),
    // columnHelper.accessor("updatedAt", { header: "Updated At" }),
    {
      id: "approve",
      header: "Approve",
      cell: (info) => (
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleApprove(info.row.original)}
            className="flex items-center gap-1 bg-green-500 text-white py-1 px-2 rounded-md"
          >
            <FaCheck />
            <span>Approve</span>
          </button>
        </div>
      ),
    },
    {
      id: "reject",
      header: "Reject",
      cell: (info) => (
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleReject(info.row.original)}
            className="flex items-center gap-1 bg-red-500 text-white py-1 px-2 rounded-md"
          >
            <FaTimes />
            <span>Reject</span>
          </button>
        </div>
      ),
    },
  ];

  // logic for approving the row data
  const handleApprove = (rowData) => {
    console.log("Approved:", rowData);
  };

  // logic for rejecting the row data
  const handleReject = (rowData) => {
    console.log("Rejected:", rowData);
  };

  // logic here
  const handleDownload = () => {
    console.log("Download button clicked");
  };

  return (
    <DashboardWrapper>
      <div className="p-5">
        <Header title={"Tokens"} />
        <div className="bg-[#000300]">
          <MyTable
            columns={columns}
            data={data}
            handleDownload={handleDownload}
          />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Tokens;
