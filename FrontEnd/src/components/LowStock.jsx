import axios from "axios";
import AdminNavBar from "./AdminNavBar";
import { useEffect, useState } from "react";

function LowStockPage() {
  const [lowStockMedicines, setLowStockMedicines] = useState([]);

  useEffect(() => {
    // Fetch low stock medicines from the backend when the component mounts
    const fetchLowStockMedicines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/inventory/low-stock"
        );
        setLowStockMedicines(response.data);
      } catch (error) {
        console.error("Error fetching low stock medicines:", error);
        alert("Failed to fetch low stock medicines");
      }
    };

    fetchLowStockMedicines();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const getQuantity = (medicine) => {
    switch (medicine.type) {
      case "tablet":
        return medicine.packQuantity || "N/A";
      case "syrup":
        return medicine.bottleQuantity || "N/A";
      case "cosmetics":
      case "other":
        return medicine.unitQuantity || "N/A";
      default:
        return "N/A";
    }
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] text-[rgb(249_250_251)] font-Poppins bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />

      <div className="relative z-100 p-8">
        <h2 className="text-3xl font-bold text-center text-[#464255] mb-6">
          Low Stock Medicines
        </h2>
        <div className="overflow-x-auto">
          {lowStockMedicines.length > 0 ? (
            <table className="min-w-full bg-[rgb(249_250_251)] rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-300 font-semibold font-Poppins text-left text-gray-700 text-sm">
                  <th className="py-3 px-4 text-left font-Poppins">Name</th>
                  <th className="py-3 px-4 text-left font-Poppins">Type</th>
                  <th className="py-3 px-4 text-left font-Poppins">
                    Quantity(pack/bottle/unit)
                  </th>
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
                {lowStockMedicines.map((medicine, index) => (
                  <tr
                    key={medicine.id}
                    className={`text-sm text-gray-700 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 font-Poppins">{medicine.name}</td>
                    <td className="py-3 px-4 font-Poppins">{medicine.type}</td>
                    <td className="py-3 px-4 text-center font-Poppins">
                      {getQuantity(medicine)}
                    </td>
                    <td className="py-3 px-4 font-Poppins">
                      {medicine.manufacturer}
                    </td>
                    <td className="py-3 px-4 font-Poppins">
                      {formatDate(medicine.expiryDate)}
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
