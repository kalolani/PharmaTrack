import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";
import { toast } from "react-toastify";
import DeleteConfirmation from "./DeleteConfirmation";

function SoldMedicines() {
  const [salesHistory, setSalesHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHandlers, setModalHandlers] = useState({
    onConfirm: null,
    onCancel: null,
  });

  // Fetch sales history from the backend
  useEffect(() => {
    const fetchSalesHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/sales-history"
        );
        setSalesHistory(response.data);
        setFilteredMedicines(response.data);
      } catch (error) {
        console.error("Error fetching sales history:", error);
        toast.error("Failed to fetch sales history.");
      }
    };

    fetchSalesHistory();
  }, []);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = salesHistory.filter((medicine) =>
      medicine.medicineName.toLowerCase().includes(query)
    );
    setFilteredMedicines(filtered);
  };

  // Handle delete sale
  const handleDeleteSale = async (saleId) => {
    setIsModalOpen(true);

    // Wait for user confirmation through the modal
    const confirmed = await new Promise((resolve) => {
      const confirmHandler = () => {
        resolve(true);
        setIsModalOpen(false);
      };

      const cancelHandler = () => {
        resolve(false);
        setIsModalOpen(false);
      };

      // Set handlers in your modal
      setModalHandlers({ onConfirm: confirmHandler, onCancel: cancelHandler });
    });

    if (!confirmed) return; // Stop execution if the user cancels

    try {
      await axios.delete(`http://localhost:3000/api/sales/delete/${saleId}`);
      toast.success("Sale deleted successfully!");

      // Update the UI by removing the deleted sale
      const updatedSales = salesHistory.filter((sale) => sale.id !== saleId);
      setSalesHistory(updatedSales);
      setFilteredMedicines(updatedSales);
    } catch (error) {
      console.error("Error deleting sale:", error);
      toast.error("Failed to delete sale.");
    }
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] bg-[#F3F2F7] min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern-dashboard opacity-40 pointer-events-none"></div>
      <AdminNavBar />
      <DashboardWelcome />

      <h1 className="text-3xl font-bold text-center text-[#464255] mb-6 font-Poppins">
        Sold Medicines
      </h1>

      <div className="relative z-10 mb-6">
        <input
          type="text"
          placeholder="Search by medicine name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border rounded text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative z-10 overflow-x-auto">
        <table className="w-full bg-white rounded-md shadow-md">
          <thead>
            <tr className="bg-green-300 font-semibold font-Poppins text-left text-gray-700 text-sm">
              <th className="p-4 font-Poppins">Medicine Name</th>
              <th className="p-4 font-Poppins">Unit Type</th>
              <th className="p-4 font-Poppins">Quantity</th>
              <th className="p-4 font-Poppins">Total Price</th>
              <th className="p-4 font-Poppins">Sale Date</th>
              <th className="p-4 font-Poppins">Salesperson</th>
              <th className="p-4 font-Poppins">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((medicine, index) => (
                <tr
                  key={medicine.id}
                  className={`text-xs ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="p-4 font-Poppins">{medicine.medicineName}</td>
                  <td className="p-4 font-Poppins">{medicine.unitType}</td>
                  <td className="p-4 font-Poppins">{medicine.quantity}</td>
                  <td className="p-4 font-Poppins">
                    <span className="bg-green-200 px-4 py-2 rounded-md">
                      {medicine.totalPrice} ETB
                    </span>
                  </td>
                  <td className="p-4 font-Poppins">
                    {new Date(medicine.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-Poppins">
                    <span className="bg-blue-200 px-4 py-2 rounded-md">
                      {medicine.salesperson || "pharmacist"}
                    </span>
                  </td>
                  <td className="p-4 font-Poppins">
                    <button
                      onClick={() => handleDeleteSale(medicine.id)}
                      className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transform transition-all duration-100"
                    >
                      Delete
                    </button>
                    {isModalOpen && (
                      <DeleteConfirmation
                        onConfirm={modalHandlers.onConfirm}
                        onCancel={modalHandlers.onCancel}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-4 text-center text-gray-500 font-Poppins"
                >
                  No medicines found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SoldMedicines;
