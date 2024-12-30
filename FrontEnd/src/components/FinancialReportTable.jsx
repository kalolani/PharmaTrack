import { useEffect, useState } from "react";
import axios from "axios";
function FinancialReportTable() {
  const [financials, setFinancials] = useState([]);
  useEffect(() => {
    const fetchFinancials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/financial-report"
        );
        setFinancials(response.data);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFinancials();
  }, []);

  return (
    <div>
      <table className="relative z-30 w-full border-collapse border border-gray-300">
        <thead className="">
          <tr className="bg-green-300 font-semibold font-Poppins text-left text-gray-700 text-sm">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Revenue</th>
            <th className="border border-gray-300 px-4 py-2">Expenses</th>
            <th className="border border-gray-300 px-4 py-2">Profit</th>
          </tr>
        </thead>
        <tbody>
          {financials.map((item, index) => (
            <tr
              key={item.id}
              className={`text-xs ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="border border-gray-300 px-4 py-2">{item.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.revenue} (ETB)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.expense} (ETB)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.profit} (ETB)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FinancialReportTable;
