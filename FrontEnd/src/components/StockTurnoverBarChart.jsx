/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StockTurnoverBarChart = ({ data }) => {
  return (
    <div className="chart-container bg-white py-2 rounded-md">
      <h2 className="text-center text-green-500 text-xl font-bold">
        Stock Turnover Rate
      </h2>
      <BarChart
        width={450}
        height={250}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="turnoverRate" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default StockTurnoverBarChart;
