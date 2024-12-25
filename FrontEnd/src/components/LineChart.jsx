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

const data = [
  { month: "January", Sales: 50 },
  { month: "February", Sales: 40 },
  { month: "March", Sales: 60 },
  { month: "April", Sales: 65 },
  { month: "May", Sales: 45 },
];

const CustomLineChart = () => {
  return (
    <div style={{ width: "100%", height: 270 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#007AFF" />

          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "insideBottom", offset: -10 }}
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
            dataKey="Sales"
            stroke="#007AFF"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
