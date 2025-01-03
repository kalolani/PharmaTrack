import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavBar from "./AdminNavBar";
import DashboardWelcome from "./DashboardWelcome";
import { useNavigate } from "react-router-dom";

function DailySales() {
  const [dailySales, setDailySales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();
  useEffect(() => {
    const fetchDailySales = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          "http://localhost:3000/api/sales/display-daily-sales"
        );
        setDailySales(response.data);
        setFilteredSales(response.data); // Initialize filtered sales
      } catch (error) {
        console.error("Error fetching daily sales:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDailySales();
  }, []);

  const handleRowClick = (date) => {
    navigate(`sales-detail/${date}`);
  };

  const handleSearch = (e) => {
    const selectedDate = e.target.value;
    setSearchDate(selectedDate);

    if (selectedDate) {
      const filtered = dailySales.filter((sale) => sale.date === selectedDate);
      setFilteredSales(filtered);
    } else {
      setFilteredSales(dailySales);
    }
  };

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
      <h1 className="text-center text-2xl text-gray-800 font-bold my-4 font-Poppins">
        Daily Sales Summary
      </h1>

      {/* Search by Date */}
      <div className="mb-4">
        <label
          htmlFor="searchDate"
          className="block text-gray-700 font-medium mb-2"
        >
          Search by Date:
        </label>
        <input
          type="date"
          id="searchDate"
          value={searchDate}
          onChange={handleSearch}
          className="p-2 border rounded-md text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading sales data...</p>
      ) : filteredSales.length > 0 ? (
        <table className="w-full bg-white border rounded-md shadow-md">
          <thead>
            <tr className="bg-green-500 font-semibold font-Poppins text-left text-gray-700 text-sm">
              <th className="p-4">Date</th>
              <th className="p-4">Quantity Sold Per Pack</th>
              <th className="p-4">Total Price</th>
              <th className="p-4 font-Poppins">Salesperson</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((sale, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(sale.date)}
                className={`text-sm cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gray-100 hover:bg-green-300 bg-opacity-50"
                    : "bg-white hover:bg-green-300 bg-opacity-50"
                }`}
              >
                <td className="p-4">{sale.date}</td>
                <td className="p-4">{sale.totalQuantity}</td>
                <td className="p-4">
                  <span className="bg-green-200 px-4 py-2 rounded-md">
                    {sale.totalPrice} ETB
                  </span>
                </td>
                <td className="p-4 font-Poppins">
                  <span className="bg-blue-200 px-4 py-2 rounded-md">
                    {sale.salesperson || "pharmacist"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">
          No sales data available{searchDate ? ` for ${searchDate}` : ""}.
        </p>
      )}
    </div>
  );
}

export default DailySales;
