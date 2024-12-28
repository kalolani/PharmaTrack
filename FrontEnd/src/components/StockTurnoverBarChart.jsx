/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  LabelList,
} from "recharts";

const StockTurnoverBarChart = ({ data }) => {
  const colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336"]; // Different colors for bars
  return (
    <div className="chart-container py-2 rounded-md px-4">
      <h2 className="text-center text-green-500 text-md font-bold">
        Stock Turnover Rate
      </h2>
      <BarChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 30,
          right: 10,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="turnover" name="Stock Turnover" barSize={30}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <LabelList dataKey="turnover" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default StockTurnoverBarChart;
