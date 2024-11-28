import { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";

function SoldMedicines() {
  // Demo data for sold medicines
  const demoSoldMedicines = [
    {
      id: 1,
      name: "Paracetamol",
      unitType: "Strip",
      quantity: 2,
      totalPrice: 200,
      saleDate: "2024-11-20",
      salesperson: "John Doe",
    },
    {
      id: 2,
      name: "Cough Syrup",
      unitType: "Bottle",
      quantity: 1,
      totalPrice: 120,
      saleDate: "2024-11-21",
      salesperson: "Jane Smith",
    },
    {
      id: 3,
      name: "Ibuprofen",
      unitType: "Pack",
      quantity: 3,
      totalPrice: 450,
      saleDate: "2024-11-19",
      salesperson: "John Doe",
    },
    {
      id: 2,
      name: "Cough Syrup",
      unitType: "Bottle",
      quantity: 1,
      totalPrice: 120,
      saleDate: "2024-11-21",
      salesperson: "Jane Smith",
    },
    {
      id: 3,
      name: "Ibuprofen",
      unitType: "Pack",
      quantity: 3,
      totalPrice: 450,
      saleDate: "2024-11-19",
      salesperson: "John Doe",
    },
    {
      id: 2,
      name: "Cough Syrup",
      unitType: "Bottle",
      quantity: 1,
      totalPrice: 120,
      saleDate: "2024-11-21",
      salesperson: "Jane Smith",
    },
    {
      id: 3,
      name: "Ibuprofen",
      unitType: "Pack",
      quantity: 3,
      totalPrice: 450,
      saleDate: "2024-11-19",
      salesperson: "John Doe",
    },
  ];

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedicines, setFilteredMedicines] = useState(demoSoldMedicines);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = demoSoldMedicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(query)
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
                  <td className="p-4 font-Poppins">{medicine.name}</td>
                  <td className="p-4 font-Poppins">{medicine.unitType}</td>
                  <td className="p-4 font-Poppins">{medicine.quantity}</td>
                  <td className="p-4 font-Poppins">${medicine.totalPrice}</td>
                  <td className="p-4 font-Poppins">{medicine.saleDate}</td>
                  <td className="p-4 font-Poppins">{medicine.salesperson}</td>
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
