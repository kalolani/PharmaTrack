// import React from "react";

import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

const InventoryReport = () => {
  // Demo data for inventory report
  const demoInventoryData = [
    {
      id: 1,
      medicineName: "Paracetamol",
      type: "Tablet",
      stock: 100,
      unit: "pk",
      expirationDate: "2025-12-31",
    },
    {
      id: 2,
      medicineName: "Cough Syrup",
      type: "Syrup",
      stock: 50,
      unit: "bottle",
      expirationDate: "2024-11-30",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      type: "Cosmetics",
      stock: 200,
      unit: "item",
      expirationDate: "2025-01-15",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      type: "Tablet",
      stock: 75,
      unit: "strip",
      expirationDate: "2026-03-10",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      type: "Cosmetics",
      stock: 200,
      unit: "item",
      expirationDate: "2025-01-15",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      type: "Tablet",
      stock: 75,
      unit: "strip",
      expirationDate: "2026-03-10",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      type: "Cosmetics",
      stock: 200,
      unit: "item",
      expirationDate: "2025-01-15",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      type: "Tablet",
      stock: 75,
      unit: "strip",
      expirationDate: "2026-03-10",
    },
  ];

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <h1 className="text-2xl font-bold mb-4">Inventory Report</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Medicine Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Unit</th>
            <th className="border border-gray-300 px-4 py-2">
              Expiration Date
            </th>
          </tr>
        </thead>
        <tbody>
          {demoInventoryData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.medicineName}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
              <td className="border border-gray-300 px-4 py-2">{item.unit}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.expirationDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryReport;
