// import { useState } from "react";

import AdminNavBar from "./AdminNavBar";
// import DashboardWelcome from "./DashboardWelcome";

function ExpiryManagement() {
  const today = new Date();

  // Demo data
  const demoMedicines = [
    {
      id: 1,
      name: "Paracetamol",
      expiryDate: "2024-12-01",
      type: "Tablet",
      quantity: 100,
      manufacturer: "Pharma Inc.",
    },
    {
      id: 2,
      name: "Ibuprofen",
      expiryDate: "2024-10-15",
      type: "Capsule",
      quantity: 50,
      manufacturer: "Health Corp.",
    },
    {
      id: 3,
      name: "Cough Syrup",
      expiryDate: "2023-11-30",
      type: "Liquid",
      quantity: 20,
      manufacturer: "Wellness Labs",
    },
    {
      id: 4,
      name: "Amoxicillin",
      expiryDate: "2024-01-10",
      type: "Capsule",
      quantity: 200,
      manufacturer: "MediCare Ltd.",
    },
  ];

  // Filter for expired medicines
  const expiredMedicines = demoMedicines.filter(
    (medicine) => new Date(medicine.expiryDate) < today
  );

  // Filter for nearing expiry medicines (next 30 days)
  const nearingExpiryMedicines = demoMedicines.filter(
    (medicine) =>
      new Date(medicine.expiryDate) > today &&
      new Date(medicine.expiryDate) <=
        new Date(today.setDate(today.getDate() + 30))
  );

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      {/* <DashboardWelcome /> */}

      {/* Low Stock Medicines */}
      <h1 className="text-3xl font-bold text-center text-[#464255] mb-6 py-4 pt-10">
        Expiry Management
      </h1>

      {/* Expired Medicines */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Expired Medicines
        </h2>
        {expiredMedicines.length > 0 ? (
          expiredMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white shadow-md p-4 mb-4 rounded-lg"
            >
              <h3 className="font-bold text-lg text-gray-800">
                {medicine.name}
              </h3>
              <p className="text-sm text-gray-600">
                Expiry Date: {medicine.expiryDate}
              </p>
              <p className="text-sm text-gray-600">Type: {medicine.type}</p>
              <p className="text-sm text-gray-600">
                Manufacturer: {medicine.manufacturer}
              </p>
              <p className="text-sm text-gray-600">
                Quantity: {medicine.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No expired medicines found.</p>
        )}
      </section>

      {/* Nearing Expiry Medicines */}
      <section>
        <h2 className="text-xl font-semibold text-yellow-500 mb-4">
          Medicines Nearing Expiry
        </h2>
        {nearingExpiryMedicines.length > 0 ? (
          nearingExpiryMedicines.map((medicine) => (
            <div
              key={medicine.id}
              className="bg-white shadow-md p-4 mb-4 rounded-lg"
            >
              <h3 className="font-bold text-lg text-gray-800">
                {medicine.name}
              </h3>
              <p className="text-sm text-gray-600">
                Expiry Date: {medicine.expiryDate}
              </p>
              <p className="text-sm text-gray-600">Type: {medicine.type}</p>
              <p className="text-sm text-gray-600">
                Manufacturer: {medicine.manufacturer}
              </p>
              <p className="text-sm text-gray-600">
                Quantity: {medicine.quantity}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No nearing expiry medicines found.</p>
        )}
      </section>
    </div>
  );
}

export default ExpiryManagement;
