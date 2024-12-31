import { useEffect, useState } from "react";
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

const CustomLineChart = () => {
  const [salesData, setSalesData] = useState([]);
  console.log(salesData);
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/sales/daily-sales"
        ); // Update the API endpoint
        setSalesData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSalesData();
  }, []);
  return (
    <div style={{ width: "100%", height: 270 }}>
      <ResponsiveContainer>
        <LineChart
          data={salesData}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#007AFF" />

          <XAxis
            dataKey="date"
            label={{ value: "date", position: "insideBottom", offset: -10 }}
            tick={{ fill: "#007AFF", fontSize: 10 }} // Tick color and size
            stroke="#007AFF"
          />

          <YAxis
            label={{ value: "Values", angle: -90, position: "insideLeft" }}
            tick={{ fill: "#007AFF", fontSize: 10 }} // Tick color and size
            stroke="#007AFF"
          />

          <Tooltip />

          <Legend verticalAlign="top" height={36} />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
