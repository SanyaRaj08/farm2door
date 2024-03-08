import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const MyPieChart = () => {
  const data = [
    { name: 'Delivery pending', students: 100, color: '#665039' },
    { name: 'Sales', students: 300, color: '#B18E64' },
    { name: 'Cancellation', students: 200, color: '#977955' },
  ];

  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="students"
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
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




