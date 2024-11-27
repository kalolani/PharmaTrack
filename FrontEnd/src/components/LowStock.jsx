import AdminNavBar from "./AdminNavBar";
// import DashboardWelcome from "./DashboardWelcome";

import { useState } from "react";
// import AdminNavBar from "./AdminNavBar";
// import DashboardWelcome from "./DashboardWelcome";

function LowStockPage() {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      quantity: 5,
      manufacturer: "ABC Pharma",
      expiryDate: "2025-12-01",
      batchNumber: "B123",
      price: 0.5,
      description: "Pain reliever and fever reducer",
    },
    {
      id: 2,
      name: "Amoxicillin",
      type: "Capsule",
      quantity: 20,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
    {
      id: 2,
      name: "Amoxicillin",
      type: "Capsule",
      quantity: 20,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
    {
      id: 2,
      name: "Amoxicillin",
      type: "Capsule",
      quantity: 20,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
    {
      id: 2,
      name: "Amoxicillin",
      type: "Capsule",
      quantity: 20,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
    {
      id: 2,
      name: "Amoxicillin",
      type: "Capsule",
      quantity: 20,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 3,
      name: "Ibuprofen",
      type: "Tablet",
      quantity: 8,
      manufacturer: "MNO Pharma",
      expiryDate: "2023-11-30",
      batchNumber: "C789",
      price: 0.8,
      description: "Pain reliever for inflammation",
    },
  ]);

  // Define the low stock threshold
  const LOW_STOCK_THRESHOLD = 10;

  // Filter medicines based on the threshold
  const lowStockMedicines = medicines.filter(
    (medicine) => medicine.quantity < LOW_STOCK_THRESHOLD
  );

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      {/* <DashboardWelcome /> */}

      {/* Low Stock Medicines */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center text-[#464255] mb-6">
          Low Stock Medicines
        </h2>
        <div className="overflow-x-auto">
          {lowStockMedicines.length > 0 ? (
            <table className="min-w-full bg-[rgb(249_250_251)] rounded-lg shadow-md">
              <thead>
                <tr className="bg-[#2D9CDB] text-[rgb(249_250_251)] uppercase text-sm">
                  <th className="py-3 px-4 text-left font-Poppins">Name</th>
                  <th className="py-3 px-4 text-left font-Poppins">Type</th>
                  <th className="py-3 px-4 text-left font-Poppins">Quantity</th>
                  <th className="py-3 px-4 text-left font-Poppins">
                    Manufacturer
                  </th>
                  <th className="py-3 px-4 text-left font-Poppins">
                    Expiry Date
                  </th>
                  <th className="py-3 px-4 text-left font-Poppins">Actions</th>
                </tr>
              </thead>
              <tbody>
                {lowStockMedicines.map((medicine) => (
                  <tr
                    key={medicine.id}
                    className="border-b hover:bg-gray-100 text-[#464255]"
                  >
                    <td className="py-3 px-4 font-Poppins">{medicine.name}</td>
                    <td className="py-3 px-4 font-Poppins">{medicine.type}</td>
                    <td className="py-3 px-4 font-Poppins">
                      {medicine.quantity}
                    </td>
                    <td className="py-3 px-4 font-Poppins">
                      {medicine.manufacturer}
                    </td>
                    <td className="py-3 px-4 font-Poppins">
                      {medicine.expiryDate}
                    </td>
                    <td className="py-3 px-4 font-Poppins">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => alert(`Reorder ${medicine.name}`)}
                      >
                        Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 font-medium">
              No low-stock medicines at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LowStockPage;
