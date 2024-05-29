import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Tokens from "./Components/Request/Tokens";
import Loading from "./Components/Loading/Loading";

// Lazy load components
const Homepage = React.lazy(() => import("./Components/Homepage"));
const SignIn = React.lazy(() => import("./Components/Auth/SignIn"));
const Dashboard = React.lazy(() => import("./Components/Dashboard/Dashboard"));
const Employees = React.lazy(() => import("./Components/Employees/Employees"));
const AddUser = React.lazy(() => import("./Components/addUser/AddUser"));
const Projects = React.lazy(() => import("./Projects/Projects"));
const Approval = React.lazy(() => import("./Components/Approve/Approval"));
const EditProject = React.lazy(() => import("./Projects/EditProject"));

const App = () => {
  return (
    <div className="app">
      <main>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/admin" element={<SignIn />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/add-user" element={<AddUser />} />
            <Route exact path="/employees" element={<Employees />} />
            <Route exact path="/tokens" element={<Tokens />} />
            <Route exact path="/approve" element={<Approval />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/editproject" element={<EditProject />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
