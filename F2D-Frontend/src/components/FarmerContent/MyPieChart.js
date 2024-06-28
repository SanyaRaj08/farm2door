import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const MyPieChart = () => {
  const data = [
    { name: 'Delivery pending', students: 100, color: 'rgb(126, 226, 126)' },
    { name: 'Sales', students: 300, color: 'rgb(50, 81, 50)' },
    { name: 'Cancellation', students: 200, color: 'rgb(73, 171, 73)' },
  ];

  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="students"
          outerRadius={100}
          innerRadius={50}
          fill="RGB(194, 245, 194)"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default MyPieChart;





