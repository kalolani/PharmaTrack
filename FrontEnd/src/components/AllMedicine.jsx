import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

function AllMedicine() {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      quantity: 500,
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
      quantity: 200,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      quantity: 500,
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
      quantity: 200,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      quantity: 500,
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
      quantity: 200,
      manufacturer: "XYZ Pharma",
      expiryDate: "2024-08-15",
      batchNumber: "A456",
      price: 1.2,
      description: "Antibiotic for bacterial infections",
    },
    {
      id: 1,
      name: "Paracetamol",
      type: "Tablet",
      quantity: 500,
      manufacturer: "ABC Pharma",
      expiryDate: "2025-12-01",
      batchNumber: "B123",
      price: 0.5,
      description: "Pain reliever and fever reducer",
    },
  ]);

  const handleDelete = (id) => {
    const updatedMedicines = medicines.filter((medicine) => medicine.id !== id);
    setMedicines(updatedMedicines);
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />

      {/* Medicines Table */}
      <div className="p-8">
        <h2 className="text-3xl font-Poppins font-semibold text-center mb-6">
          Medicine Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[rgb(249_250_251)] rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#2D9CDB] text-[rgb(249_250_251)] uppercase text-sm font-Poppins">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Manufacturer</th>
                <th className="py-3 px-4 text-left">Expiry Date</th>
                <th className="py-3 px-4 text-left">Batch Number</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.length > 0 ? (
                medicines.map((medicine) => (
                  <tr
                    key={medicine.id}
                    className="border-b hover:bg-gray-100 text-[#464255] font-Poppins"
                  >
                    <td className="py-3 px-4">{medicine.name}</td>
                    <td className="py-3 px-4">{medicine.type}</td>
                    <td className="py-3 px-4">{medicine.quantity}</td>
                    <td className="py-3 px-4">{medicine.manufacturer}</td>
                    <td className="py-3 px-4">{medicine.expiryDate}</td>
                    <td className="py-3 px-4">{medicine.batchNumber}</td>
                    <td className="py-3 px-4">${medicine.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No medicines added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllMedicine;
