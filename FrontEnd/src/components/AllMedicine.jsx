import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";
import axios from "axios";
import { useEffect, useState } from "react";

function AllMedicine() {
  const [medicines, setMedicines] = useState([]);
  console.log(medicines);
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/inventory/list-medicine"
        );
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    fetchMedicines();
  }, []);

  const deleteMedicine = async (id) => {
    try {
      // Send DELETE request to the backend
      await axios.delete(
        `http://localhost:3000/api/inventory/delete-medicine/${id}`
      );

      // Remove the deleted medicine from the state
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
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white uppercase text-sm">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Manufacturer</th>
                <th className="py-3 px-4 text-left">Expiry Date</th>
                <th className="py-3 px-4 text-left">Batch Number</th>
                {medicines.some((medicine) => medicine.type === "Tablet") && (
                  <>
                    <th className="py-3 px-4 text-left">PricePerStrip</th>
                    <th className="py-3 px-4 text-left">PricePerPack</th>
                  </>
                )}
                {medicines.some(
                  (medicine) =>
                    medicine.type === "syrup" || medicine.type === "cosmetics"
                ) && <th className="py-3 px-4 text-left">PricePerUnit</th>}
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.length > 0 ? (
                medicines.map((medicine) => (
                  <tr key={medicine.id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4">{medicine.name}</td>
                    <td className="py-3 px-4">{medicine.type}</td>
                    <td className="py-3 px-4">{medicine.quantity}</td>
                    <td className="py-3 px-4">{medicine.manufacturer}</td>
                    <td className="py-3 px-4">
                      {formatDate(medicine.expiryDate)}
                    </td>
                    <td className="py-3 px-4">{medicine.batchNumber}</td>
                    {medicine.type === "Tablet" && (
                      <>
                        <td className="py-3 px-4">${medicine.pricePerStrip}</td>
                        <td className="py-3 px-4">${medicine.pricePerPack}</td>
                      </>
                    )}
                    {(medicine.type === "syrup" ||
                      medicine.type === "cosmetics") && (
                      <td className="py-3 px-4">${medicine.pricePerUnit}</td>
                    )}
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
                  <td colSpan="8" className="text-center py-6 text-gray-500">
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
