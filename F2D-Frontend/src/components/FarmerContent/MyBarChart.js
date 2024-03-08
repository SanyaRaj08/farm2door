import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MyBarChart = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const data = [
    { stars: 5, count: 100 },
    { stars: 4, count: 200 },
    { stars: 3, count: 150 },
    { stars: 2, count: 50 },
    { stars: 1, count: 20 },
  ];

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            style={{
              cursor: 'pointer',
              color: rating <= selectedRating ? '#665039' : 'white',
            }}
            onClick={() => handleRatingClick(rating)}
          >
            ★
          </span>
        ))}
      </div>
      <BarChart
        width={300}
        height={150}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="stars" type="category" />
        <Tooltip />
        <Bar dataKey="count" fill="#665039" stroke="none" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;



