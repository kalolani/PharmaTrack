/* eslint-disable react/prop-types */
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const colors = ["#82ca9d", "#ff8042", "#8dd1e1"];

const PieChartComponent = ({ data, title }) => {
  return (
    <div className="bg-white py-2 px-[2px] rounded-md text-center">
      <h3 className="text-xs text-center mr-20">{title}</h3>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          dataKey="sales"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="80%"
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" verticalAlign="start" align="right" />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
