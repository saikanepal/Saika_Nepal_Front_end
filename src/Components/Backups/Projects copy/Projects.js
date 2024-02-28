import React, { useEffect, useState } from "react";
import DashboardWrapper from "../Components/Global/DashboardWrapper";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import request from "../Utils/HttpRequests";
import Loading from "../Components/Loading/Loading";
import TransitionAlerts from "../Components/Alerts/TransitionAlerts";
import MyTable from "../Components/MyTable/MyTable";
import { createColumnHelper } from "@tanstack/react-table";
import { FaCheck, FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import downloader from "../Utils/Dowload";
import Confirmation from "../Components/MyModals/Confirmation";
import { setSelectedProject } from "../Slices/authSlice";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  /* Table config */
  const columnHelper = createColumnHelper();

  const columns = [
    { field: "_id", headerName: "Project ID" },
    { field: "projecttitle", headerName: "Project Title" },
    { field: "firstname", headerName: "Firstname" },
    { field: "lastname", headerName: "LastName" },
    { field: "email", headerName: "Email" },
    { field: "phonenumber", headerName: "PhoneNumber" },
    { field: "createdAt", headerName: "Time" },
    { field: "status", headerName: "Status" },
    { field: "githuburl", headerName: "GitHub" },
    { field: "googledriveurl", headerName: "GoogleDrive" },
    { field: "estimationtime", headerName: "Deadline" },
    { field: "approvedby", headerName: "Approved By" },
  ];

  const convertColumns = (columns) => {
    return columns.map((column) => {
      if (column.field === "approvedby") {
        return columnHelper.accessor(
          (row) => row.approvedby.username || "N/A",
          { header: column.field }
        );
      }
      return columnHelper.accessor(column.field, { header: column.headerName });
    });
  };

  const [tableColumns, setTableColumns] = useState(convertColumns(columns));
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();
  /* Notification manager */
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  // User config
  const token = useSelector((state) => state.authState.token);
  const user = useSelector((state) => state.authState.user);

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [req, setReq] = useState(null);
  const navigate = useNavigate();
  console.log(projects);
  /* Retreive all the on going projects */
  const fetch_All_Ongoing_Projects = async () => {
    try {
      setLoading(true);
      const response = await request.get("/api/project/getallprojects", {
        Authorization: token,
      });
      setLoading(false);
      if (response.status !== true) throw new Error(response.message);
      setProjects(response.message);
    } catch (error) {
      setLoading(false);
      setOpen(false);
      setStatus(false);
      setNotificationMessage(error.message);
    }
  };

  const handleEdit = async (project) => {
    console.log(project);
    dispatch(setSelectedProject(project));
    navigate('/editproject')
  };
  const handleReject = async (userrequest) => {
    try {
      setIsLoading(true);
      const deleteresponse = await request.delete(
        `/api/project/deleteproject/${userrequest._id}`,
        request.generateConfigData("application/json", token)
      );
      console.log({ deleteresponse });

      if (deleteresponse.status !== true)
        throw new Error(deleteresponse.message);

      setTimeout(() => {
        setIsLoading(false);
        setOpen(true);
        setStatus(true);
        setNotificationMessage("Request Deleted");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setOpen(false);
      setStatus(false);
      setNotificationMessage(error.message);
    }
  };

  const handleDelete = async (e) => {
    console.log(`[+] Request to be deleted`, req);
    handleReject(req);
  };

  const handleConfirmDelete = (confirmed) => {
    console.log(`Confirmation :${confirmed}`);
    // console.log(req);
    if (confirmed) handleDelete();
    setShowConfirmDelete(false);
  };

  const Add_Columns = () => {
    if (user.isAdmin === "admin") {
      setTableColumns((prevColumns) => {
        const hasApproveColumn = prevColumns.some(
          (column) => column.id === "approve"
        );
        const hasRejectColumn = prevColumns.some(
          (column) => column.id === "reject"
        );
        const hasProjectFeesColumn = prevColumns.some(
          (column) => column.id === "projectfees"
        );
        const hasAdvanceAmountColumn = prevColumns.some(
          (column) => column.id === "advanceamount"
        );

        let newColumns = [...prevColumns];

        if (!hasProjectFeesColumn) {
          newColumns = [
            ...newColumns,
            {
              id: "projectfees",
              header: "Fees",
              cell: ({ row }) => <span>{row.original.projectfees}</span>,
            },
          ];
        }

        if (!hasAdvanceAmountColumn) {
          newColumns = [
            ...newColumns,
            {
              id: "advanceamount",
              header: "Advance",
              cell: ({ row }) => <span>{row.original.advanceamount}</span>,
            },
          ];
        }

        if (!hasApproveColumn) {
          newColumns = [
            ...newColumns,
            {
              id: "approve",
              header: "Edit",
              cell: ({ row }) => (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleEdit(row.original)}
                    className="flex items-center gap-1 bg-green-500 text-white py-1 px-2 rounded-md"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                </div>
              ),
            },
          ];
        }

        if (!hasRejectColumn) {
          newColumns = [
            ...newColumns,
            {
              id: "reject",
              header: "Delete",
              flex: 1,
              cell: ({ row }) => (
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      setReq(row.original);
                      setShowConfirmDelete(true);
                      /* Old method */
                      // handleReject(info.row.original)
                    }}
                    className="flex items-center gap-1 bg-red-500 text-white py-1 px-2 rounded-md"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>
              ),
            },
          ];
        }

        return newColumns;
      });
    }
  };

  useEffect(() => {
    fetch_All_Ongoing_Projects();
    Add_Columns();
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <div className="p-5">
          <Header title={"Ongoing Projects"} />
          <div className="bg-[#000300]">
            {loading ? (
              <Loading />
            ) : (
              <MyTable
                columns={tableColumns}
                data={projects}
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
          <div>
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
    </div>
  );
};

export default Projects;
