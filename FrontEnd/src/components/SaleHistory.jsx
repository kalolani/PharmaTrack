import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

function SoldMedicines() {
  const [salesHistory, setSalesHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  // Fetch sales history from the backend
  useEffect(() => {
    const fetchSalesHistory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/sales-history"
        ); // Update the endpoint if necessary
        console.log(response.data);
        setSalesHistory(response.data);
        setFilteredMedicines(response.data); // Initialize filtered medicines with fetched data
      } catch (error) {
        console.error("Error fetching sales history:", error);
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

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] bg-[#F3F2F7] min-h-screen">
      {/* Navbar */}
      <AdminNavBar />

      {/* Welcome Section */}
      <DashboardWelcome />

      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-[#464255] mb-6 font-Poppins">
        Sold Medicines
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by medicine name..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border rounded text-gray-800 focus:outline-2 outline-[#2D9CDB]"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-[#2D9CDB] text-left text-white">
              <th className="p-4 font-Poppins">Medicine Name</th>
              <th className="p-4 font-Poppins">Unit Type</th>
              <th className="p-4 font-Poppins">Quantity</th>
              <th className="p-4 font-Poppins">Total Price</th>
              <th className="p-4 font-Poppins">Sale Date</th>
              <th className="p-4 font-Poppins">Salesperson</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((medicine) => (
                <tr key={medicine.id} className="border-b hover:bg-gray-100">
                  <td className="p-4 font-Poppins">{medicine.medicineName}</td>
                  <td className="p-4 font-Poppins">{medicine.unitType}</td>
                  <td className="p-4 font-Poppins">{medicine.quantity}</td>
                  <td className="p-4 font-Poppins">${medicine.totalPrice}</td>
                  <td className="p-4 font-Poppins">
                    {new Date(medicine.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-Poppins">
                    {medicine.salesperson || "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
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
