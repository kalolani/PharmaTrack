import { useEffect, useState } from "react";
import axios from "axios";

function InventroyReportTable() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("http://localhost:3000/api/inventory/list") // Replace with your actual API endpoint
      .then((response) => {
        console.log(response);
        setMedicines(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="relative z-100">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-300 font-semibold font-Poppins text-left text-gray-700 text-sm">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Cost/Unit</th>
            <th className="border border-gray-300 px-4 py-2">Total Value</th>
            <th className="border border-gray-300 px-4 py-2">Expiry Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Batch Number</th>
            <th className="border border-gray-300 px-4 py-2">Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((item, index) => (
            <tr
              key={item.id}
              className={`text-xs ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.type}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.stockLevel}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.costPerUnit}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.totalValue.toFixed(2)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(item.expiryDate).toLocaleDateString()}
              </td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  item.status === "Low Stock"
                    ? "text-yellow-500"
                    : item.status === "Out of Stock"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {item.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.batchNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.manufacturer}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventroyReportTable;
