import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import Header from "../Header/Header";
import { createColumnHelper } from "@tanstack/react-table";
import MyTable from "../MyTable/MyTable";
import { FaCheck, FaTimes } from "react-icons/fa";
import request from "../../Utils/HttpRequests";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import TransitionAlerts from "../Alerts/TransitionAlerts";
import { useNavigate } from "react-router-dom";
import { setSelectedRequest } from "../../Slices/authSlice";
import downloader from "../../Utils/Dowload";
import Confirmation from "../MyModals/Confirmation";
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
  /*  */
  const dispatch = useDispatch();
  /* Table config */
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [tableColumns, setTableColumns] = useState([
    columnHelper.accessor("_id", { header: "ID" }),
    columnHelper.accessor("firstname", { header: "First Name" }),
    columnHelper.accessor("lastname", { header: "Last Name" }),
    columnHelper.accessor("phonenumber", { header: "Phone Number" }),
    columnHelper.accessor("message", { header: "Message" }),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor("pending", { header: "Pending" }),
    columnHelper.accessor("createdAt", { header: "Created At" }),
  ]);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [req, setReq] = useState(null);

  const handleDelete = async (e) => {
    handleReject(req);
  };

  const handleConfirmDelete = (confirmed) => {

    if (confirmed) handleDelete();
    setShowConfirmDelete(false);
  };

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
    if (user.isAdmin === "admin") {
      setTableColumns((prevColumns) => {
        const hasApproveColumn = prevColumns.some(
          (column) => column.id === "approve"
        );
        const hasRejectColumn = prevColumns.some(
          (column) => column.id === "reject"
        );

        const newColumns = [...prevColumns];
        if (!hasApproveColumn) {
          newColumns.push({
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
          });
        }

        if (!hasRejectColumn) {
          newColumns.push({
            id: "reject",
            header: "Reject",
            cell: (info) => (
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    setReq(info.row.original);
                    setShowConfirmDelete(true);
                    /* Old method */
                    // handleReject(info.row.original)
                  }}
                  className="flex items-center gap-1 bg-red-500 text-white py-1 px-2 rounded-md"
                >
                  <FaTimes />
                  <span>Reject</span>
                </button>
              </div>
            ),
          });
        }

        return newColumns;
      });
    }
  }, []); // Include tableColumns in the dependency arr

  // logic for approving the row data
  const handleApprove = (rowData) => {
    dispatch(setSelectedRequest(rowData));
    return navigate("/approve");
  };

  // logic for rejecting the row data
  const handleReject = async (userrequest) => {
    try {
      setIsLoading(true);
      const deleteresponse = await request.delete(
        `/api/request/deleterequest/${userrequest._id}`,
        request.generateConfigData("application/json", token)
      );

      if (deleteresponse.status !== true) {
        throw new Error(deleteresponse.message);
      }

      setTimeout(() => {
        setOpen(true);
        setStatus(true);
        setNotificationMessage("Request Deleted");
        setIsLoading(false);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setOpen(false);
      setStatus(false);
      setNotificationMessage(error.message);
    }
  };

  return (
    <DashboardWrapper>
      <div className="p-5">
        <Header title={"Tokens"} />
        <div className="bg-[#000300]">
          {loading ? (
            <Loading />
          ) : (
            <MyTable
              columns={tableColumns}
              data={data}
              handleDownload={downloader.download}
            />
          )}
        </div>
        <Confirmation
          isOpen={showConfirmDelete}
          title="Are You Sure You Want to Delete"
          onCancel={handleConfirmDelete}
          onConfirm={handleConfirmDelete}
        />
        <div className="mt-2">
          {isloading && <Loading />}
          <TransitionAlerts
            msg={notificationMessage}
            open={open}
            setOpen={setOpen}
            status={status}
          />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Tokens;
