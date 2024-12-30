// import React from "react";

import AdminNavBar from "./AdminNavBar";
import DashboardStatics from "./DashboardStatics";
import DashboardWelcome from "./DashboardWelcome";
import FinancialReportTable from "./FinancialReportTable";

const FinancialReport = () => {
  // Demo data for financial report

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <DashboardStatics />
      <h1 className="inline-block my-8 text-lg font-bold px-4 py-2 text-gray-700 bg-green-300 rounded-md">
        Financial Report
      </h1>
      <FinancialReportTable />
    </div>
  );
};

export default FinancialReport;
