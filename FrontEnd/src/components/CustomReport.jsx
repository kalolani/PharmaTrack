import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

const FinancialReport = () => {
  // Demo data for financial report
  const demoFinancialData = [
    { id: 1, date: "2024-11-01", revenue: 5000, expenses: 2000, profit: 3000 },
    { id: 2, date: "2024-11-02", revenue: 4500, expenses: 1800, profit: 2700 },
    { id: 3, date: "2024-11-03", revenue: 5200, expenses: 2500, profit: 2700 },
    { id: 4, date: "2024-11-04", revenue: 4800, expenses: 2200, profit: 2600 },
  ];

  // State for filtered data and form inputs
  const [filteredData, setFilteredData] = useState(demoFinancialData);
  const [filterCriteria, setFilterCriteria] = useState({
    startDate: "",
    endDate: "",
    minRevenue: "",
    maxRevenue: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  // Filter data based on user input
  const applyFilters = () => {
    const { startDate, endDate, minRevenue, maxRevenue } = filterCriteria;
    const filtered = demoFinancialData.filter((record) => {
      const recordDate = new Date(record.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const minRev = minRevenue ? parseFloat(minRevenue) : null;
      const maxRev = maxRevenue ? parseFloat(maxRevenue) : null;

      return (
        (!start || recordDate >= start) &&
        (!end || recordDate <= end) &&
        (!minRev || record.revenue >= minRev) &&
        (!maxRev || record.revenue <= maxRev)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <h1 className="text-2xl font-bold mb-4">Financial Report</h1>

      {/* Custom Filter Form */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Custom Report Filters</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={filterCriteria.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filterCriteria.endDate}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Min Revenue</label>
            <input
              type="number"
              name="minRevenue"
              value={filterCriteria.minRevenue}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Max Revenue</label>
            <input
              type="number"
              name="maxRevenue"
              value={filterCriteria.maxRevenue}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button
          onClick={applyFilters}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>

      {/* Report Table */}
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
          {filteredData.map((record) => (
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
