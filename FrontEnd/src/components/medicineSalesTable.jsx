import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowRoundUp } from "react-icons/io";

const MedicineSalesTable = () => {
  const [salesReport, setSalesReport] = useState([]);
  console.log(salesReport);

  useEffect(() => {
    const fetchSalesReport = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/sales-report"
        );
        setSalesReport(response.data);
      } catch (error) {
        console.error("Error fetching sales report:", error);
      }
    };

    fetchSalesReport();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Medicine Name</th>
            <th className="px-4 py-2 border border-gray-300">Type</th>
            <th className="px-4 py-2 border border-gray-300">Unit Type</th>
            <th className="px-4 py-2 border border-gray-300">Items Sold</th>

            <th className="px-4 py-2 border border-gray-300">
              Cost of Goods (ETB)
            </th>
            <th className="px-4 py-2 border border-gray-300">
              Total Revenue (ETB)
            </th>
            <th className="px-4 py-2 border border-gray-300">
              Profit Margin (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {salesReport.map((medicine, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2 border border-gray-300">
                {medicine.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {medicine.type}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {medicine.unitTypes}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {medicine.unitsSold}
              </td>

              <td className="px-4 py-2 border border-gray-300">
                {medicine.totalCost}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {medicine.totalRevenue}
              </td>

              <td className={` px-4 py-2 border border-gray-300 font-bold `}>
                <span
                  className={`w-[70%] flex gap-2 items-center justify-center py-[4px] text-white rounded-md ${
                    medicine.profitMargin >= 0 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {" "}
                  {medicine.profitMargin}
                  <IoIosArrowRoundUp color="" size={20} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineSalesTable;
