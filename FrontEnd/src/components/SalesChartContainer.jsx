import { useEffect, useState } from "react";
import HighLowSeller from "./HighLowSeller";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

function SalesChartContainer() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesGrowth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/daily-sales-growth"
        );
        setSalesData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSalesGrowth();
  }, []);
  return (
    <div className="grid grid-cols-2 items-center gap-32 mt-4 rounded-md w-full m-auto">
      <div className="relative flex rounded-md ">
        <HighLowSeller />
      </div>
      <div className="relative py-4 ml-6 mr-4 w-[95%] bg-white rounded-md shadow-md">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={salesData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgb(147 197 253 / var(--tw-bg-opacity, 1))"
            />
            <XAxis
              dataKey="date"
              tick={{
                fill: "rgb(37 99 235 / var(--tw-bg-opacity, 1))",
                fontSize: 10,
              }} // Tick color and size
              stroke="rgb(37 99 235 / var(--tw-bg-opacity, 1))"
            />
            <YAxis
              tick={{
                fill: "rgb(37 99 235 / var(--tw-bg-opacity, 1))",
                fontSize: 10,
              }} // Tick color and size
              stroke="rgb(37 99 235 / var(--tw-bg-opacity, 1))"
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="rgb(217 119 6 / var(--tw-bg-opacity, 1))"
              name="Daily Sales"
            />
            <Line
              type="monotone"
              dataKey="growthRate"
              stroke="rgb(22 163 74 / var(--tw-bg-opacity, 1))"
              name="Growth Rate (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChartContainer;
