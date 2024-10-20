import React from "react";
import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form.jsx";
import FinancialRecordList from "./financial-record-list.jsx";

function Dashboard() {
  const { user } = useUser();
  return (
    <div className="dashboard-container">
      <h1>Welcome {user?.firstName}! Here's how your finances are looking,</h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  );
}

export default Dashboard;
