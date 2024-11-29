// import React from "react";

import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

const SalesReport = () => {
  // Demo data for sales report
  const demoSalesData = [
    {
      id: 1,
      medicineName: "Paracetamol",
      quantity: 10,
      unitType: "strip",
      totalPrice: 50,
      date: "2024-11-25",
    },
    {
      id: 2,
      medicineName: "Cough Syrup",
      quantity: 2,
      unitType: "bottle",
      totalPrice: 200,
      date: "2024-11-24",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      quantity: 5,
      unitType: "item",
      totalPrice: 100,
      date: "2024-11-23",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      quantity: 3,
      unitType: "pk",
      totalPrice: 75,
      date: "2024-11-22",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      quantity: 5,
      unitType: "item",
      totalPrice: 100,
      date: "2024-11-23",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      quantity: 3,
      unitType: "pk",
      totalPrice: 75,
      date: "2024-11-22",
    },
    {
      id: 3,
      medicineName: "Vitamin C",
      quantity: 5,
      unitType: "item",
      totalPrice: 100,
      date: "2024-11-23",
    },
    {
      id: 4,
      medicineName: "Amoxicillin",
      quantity: 3,
      unitType: "pk",
      totalPrice: 75,
      date: "2024-11-22",
    },
  ];

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />
      <h1 className="text-2xl font-bold mb-4 pt-4">Sales Report</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Medicine Name</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Unit Type</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {demoSalesData.map((sale) => (
            <tr key={sale.id}>
              <td className="border border-gray-300 px-4 py-2">{sale.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {sale.medicineName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {sale.quantity}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {sale.unitType}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {sale.totalPrice}
              </td>
              <td className="border border-gray-300 px-4 py-2">{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
