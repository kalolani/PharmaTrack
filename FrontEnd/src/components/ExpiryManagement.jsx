import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import axios from "axios";

function ExpiryManagement() {
  const [expiredMedicines, setExpiredMedicines] = useState([]);

  useEffect(() => {
    const fetchExpiredMedicines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/inventory/expired-medicines"
        );
        setExpiredMedicines(response.data);
      } catch (error) {
        console.error("Error fetching expired medicines:", error);
      }
    };

    fetchExpiredMedicines();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249 250 251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      {/* <DashboardWelcome /> */}

      {/* Low Stock Medicines */}
      <h1 className="text-3xl font-bold text-center text-[#464255] mb-6 py-4 pt-10">
        Expiry Management
      </h1>

      {/* Expired Medicines */}
      <section className="relative z-100 mb-8">
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
                Expiry Date: {formatDate(medicine.expiryDate)}
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
      {/* <section>
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
      </section> */}
    </div>
  );
}

export default ExpiryManagement;
