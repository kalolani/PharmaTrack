// import React from "react";

import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";
import InventoryReportStastics from "./InventoryReportStastics";
import InventroyReportTable from "./InventroyReportTable";

const InventoryReport = () => {
  // Demo data for inventory report

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <InventoryReportStastics />
      <div className="group my-12 text-center hover:cursor-pointer">
        <h1 className="inline-block text-base font-semibold font-Poppins text-gray-800 px-8 py-2 bg-gradient-to-r from-indigo-500 tracking-wider bg-green-300 rounded-md shadow-md group-hover:shadow-none">
          Inventory Report
        </h1>
      </div>
      <InventroyReportTable />
    </div>
  );
};

export default InventoryReport;
