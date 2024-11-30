import { useState } from "react";
import { saveAs } from "file-saver"; // For CSV export

import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

const CustomReportPage = () => {
  // Demo Data
  const demoData = [
    { date: "2024-11-01", revenue: 1000, category: "Medicine", profit: 300 },
    { date: "2024-11-02", revenue: 2000, category: "Cosmetics", profit: 500 },
    { date: "2024-11-03", revenue: 1500, category: "Syrups", profit: 400 },
    { date: "2024-11-01", revenue: 1000, category: "Medicine", profit: 300 },
    { date: "2024-11-02", revenue: 2000, category: "Cosmetics", profit: 500 },
    { date: "2024-11-03", revenue: 1500, category: "Syrups", profit: 400 },
    { date: "2024-11-02", revenue: 2000, category: "Cosmetics", profit: 500 },
    { date: "2024-11-03", revenue: 1500, category: "Syrups", profit: 400 },
    { date: "2024-11-01", revenue: 1000, category: "Medicine", profit: 300 },
    { date: "2024-11-02", revenue: 2000, category: "Cosmetics", profit: 500 },
  ];

  // State Management
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
  });
  const [filteredData, setFilteredData] = useState(demoData);

  // Handle Filter Change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Generate Report
  const handleGenerateReport = (e) => {
    e.preventDefault();
    const { startDate, endDate, minRevenue, maxRevenue } = filters;
    const filtered = demoData.filter((record) => {
      return (
        (!startDate || record.date >= startDate) &&
        (!endDate || record.date <= endDate) &&
        (!minRevenue || record.revenue >= parseFloat(minRevenue)) &&
        (!maxRevenue || record.revenue <= parseFloat(maxRevenue))
      );
    });
    setFilteredData(filtered);
  };

  // Export as CSV
  const handleExportCSV = () => {
    const csvRows = [
      "Date,Revenue,Category,Profit", // Header row
      ...filteredData.map((record) =>
        [record.date, record.revenue, record.category, record.profit].join(",")
      ),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    saveAs(blob, "report.csv");
  };

  return (
    <div className="relative pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
      <h1 className="text-3xl font-Poppins font-semibold text-center mb-6">
        Custom Report System
      </h1>

      {/* Filter Form */}
      <form
        onSubmit={handleGenerateReport}
        className="bg-white px-4 py-6 grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <label className="block text-gray-600 mb-2">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Min Revenue:</label>
          <input
            type="number"
            name="minRevenue"
            value={filters.minRevenue}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Max Revenue:</label>
          <input
            type="number"
            name="maxRevenue"
            value={filters.maxRevenue}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      {/* Export Button */}
      <div className="flex gap-4">
        <button
          onClick={handleExportCSV}
          className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-600 transition-all mb-8"
        >
          Export as CSV
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-all mb-8"
        >
          Generate Report
        </button>
      </div>

      {/* Table Section */}
      <div className="mt-10 overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Revenue</th>
              <th className="border border-gray-300 px-4 py-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record) => (
              <tr key={record.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {record.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {record.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${record.revenue}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  ${record.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomReportPage;
