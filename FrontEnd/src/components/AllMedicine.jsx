import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

function AllMedicine() {
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/inventory/list-medicine"
        );
        setMedicines(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch medicines. Please try again later.");
        console.error("Error fetching medicines:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const deleteMedicine = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/inventory/delete-medicine/${id}`
      );
      setMedicines((prevMedicines) =>
        prevMedicines.filter((medicine) => medicine.id !== id)
      );
      alert("Medicine deleted successfully");
    } catch (error) {
      console.error("Error deleting medicine:", error);
      alert("Failed to delete medicine");
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const getQuantity = (medicine) => {
    switch (medicine.type.toLowerCase()) {
      case "tablet":
        return medicine.packQuantity;
      case "syrup":
        return medicine.bottleQuantity;
      case "cosmetics":
      default:
        return medicine.unitQuantity;
    }
  };

  return (
    <div className="p-6 w-[85%] min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />

      {/* Medicines Table */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Medicine Inventory
        </h2>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-gray-500">Loading medicines...</div>
        )}

        {/* Error State */}
        {error && <div className="text-center text-red-500 my-4">{error}</div>}

        {!isLoading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-500 text-white uppercase text-sm">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">
                    Quantity(pack/bottle/unit)
                  </th>
                  <th className="py-3 px-4 text-left">Manufacturer</th>
                  <th className="py-3 px-4 text-left">Expiry Date</th>
                  <th className="py-3 px-4 text-left">Batch Number</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicines.length > 0 ? (
                  medicines.map((medicine) => (
                    <tr
                      key={medicine.id}
                      className="border-b hover:bg-gray-100"
                    >
                      <td className="py-3 px-4">{medicine.name}</td>
                      <td className="py-3 px-4">{medicine.type}</td>
                      <td className="py-3 px-4 text-center">
                        {getQuantity(medicine)}
                      </td>
                      <td className="py-3 px-4">{medicine.manufacturer}</td>
                      <td className="py-3 px-4">
                        {formatDate(medicine.expiryDate)}
                      </td>
                      <td className="py-3 px-4">{medicine.batchNumber}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => deleteMedicine(medicine.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-500">
                      No medicines available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllMedicine;
