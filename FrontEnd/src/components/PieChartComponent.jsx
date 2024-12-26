/* eslint-disable react/prop-types */
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const colors = ["#82ca9d", "#ff8042", "#8dd1e1"];

const PieChartComponent = ({ data, title }) => {
  return (
    <div className="bg-white py-2 px-[2px]">
      <h3>{title}</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="80%"
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="start" align="left" />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;