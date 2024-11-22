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
  { month: "January", Sales: 50, Revenue: 55 },
  { month: "February", Sales: 40, Revenue: 65 },
  { month: "March", Sales: 60, Revenue: 75 },
  { month: "April", Sales: 65, Revenue: 85 },
  { month: "May", Sales: 45, Revenue: 95 },
];

const CustomLineChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X-Axis */}
          <XAxis
            dataKey="month"
            label={{ value: "Months", position: "insideBottom", offset: -10 }}
          />

          {/* Y-Axis */}
          <YAxis
            label={{ value: "Values", angle: -90, position: "insideLeft" }}
          />

          {/* Tooltip */}
          <Tooltip />

          {/* Legend */}
          <Legend verticalAlign="top" height={36} />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="Sales"
            stroke="#FF5B5B"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Revenue"
            stroke="#4B88A2"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
