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
    <div className="chart-container py-2 rounded-md ">
      <h2 className="text-center text-green-500 text-md font-bold">
        Stock Turnover Rate
      </h2>
      <BarChart
        width={450}
        height={300}
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
        <Bar dataKey="turnoverRate" fill="#82ca9d" barSize={30} />
      </BarChart>
    </div>
  );
};

export default StockTurnoverBarChart;
