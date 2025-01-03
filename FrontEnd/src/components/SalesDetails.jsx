import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardWelcome from "./DashboardWelcome";
import AdminNavBar from "./AdminNavBar";

function SalesDetails() {
  const { date } = useParams();
  const [salesDetails, setSalesDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalesDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/sales/sales-detail/${date}`
        );
        console.log(response);
        setSalesDetails(response.data);
      } catch (error) {
        console.error("Error fetching sales details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesDetails();
  }, [date]);

  return (
    <div className="pt-[20px] pb-[50px] px-[20px] w-[85%] h-[100%] z-[10] bg-[#F3F2F7] min-h-screen">
      <AdminNavBar />
      <DashboardWelcome />
      <h1 className="text-2xl font-bold mb-4 text-center font-Poppins text-gray-800">
        Sales Details for {date}
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading sales details...</p>
      ) : salesDetails.length > 0 ? (
        <table className="w-full bg-white border rounded-md shadow-md">
          <thead>
            <tr className="bg-green-500 font-semibold font-Poppins text-left text-gray-700 text-sm">
              <th className="p-4">Medicine Name</th>
              <th className="p-4">Unit Type</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {salesDetails.map((sale, index) => (
              <tr
                key={index}
                className={`text-sm cursor-pointer ${
                  index % 2 === 0
                    ? "bg-gray-100 hover:bg-green-300 bg-opacity-50"
                    : "bg-white hover:bg-green-300 bg-opacity-50"
                }`}
              >
                <td className="p-4">{sale.medicineName}</td>
                <td className="p-4">{sale.unitType}</td>
                <td className="p-4">{sale.quantity}</td>
                <td className="p-4">
                  <span className="bg-green-200 px-4 py-2 rounded-md">
                    {sale.totalPrice} ETB
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">
          No sales details available for {date}.
        </p>
      )}
    </div>
  );
}

export default SalesDetails;
