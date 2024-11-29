// import React from "react";

import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

const FinancialReport = () => {
  // Demo data for financial report
  const demoFinancialData = [
    { id: 1, date: "2024-11-01", revenue: 5000, expenses: 2000, profit: 3000 },
    { id: 2, date: "2024-11-02", revenue: 4500, expenses: 1800, profit: 2700 },
    { id: 3, date: "2024-11-03", revenue: 5200, expenses: 2500, profit: 2700 },
    { id: 4, date: "2024-11-04", revenue: 4800, expenses: 2200, profit: 2600 },
    { id: 1, date: "2024-11-01", revenue: 5000, expenses: 2000, profit: 3000 },
    { id: 2, date: "2024-11-02", revenue: 4500, expenses: 1800, profit: 2700 },
    { id: 3, date: "2024-11-03", revenue: 5200, expenses: 2500, profit: 2700 },
    { id: 4, date: "2024-11-04", revenue: 4800, expenses: 2200, profit: 2600 },
    { id: 1, date: "2024-11-01", revenue: 5000, expenses: 2000, profit: 3000 },
    { id: 2, date: "2024-11-02", revenue: 4500, expenses: 1800, profit: 2700 },
    { id: 3, date: "2024-11-03", revenue: 5200, expenses: 2500, profit: 2700 },
    { id: 4, date: "2024-11-04", revenue: 4800, expenses: 2200, profit: 2600 },
  ];

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <h1 className="text-2xl font-bold mb-4">Financial Report</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Revenue</th>
            <th className="border border-gray-300 px-4 py-2">Expenses</th>
            <th className="border border-gray-300 px-4 py-2">Profit</th>
          </tr>
        </thead>
        <tbody>
          {demoFinancialData.map((record) => (
            <tr key={record.id}>
              <td className="border border-gray-300 px-4 py-2">{record.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {record.date}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${record.revenue}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${record.expenses}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${record.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialReport;
