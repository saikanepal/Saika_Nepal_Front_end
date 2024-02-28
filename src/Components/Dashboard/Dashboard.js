import React from "react";
import DashboardWrapper from "../Global/DashboardWrapper";
import Header from "../Header/Header";
import Management from "../Management/Management";

const Dashboard = () => {
  return (
    <div>
      <DashboardWrapper>
        <div className="p-5">
          <Header title={"Dashboard"} />
          <Management />
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
