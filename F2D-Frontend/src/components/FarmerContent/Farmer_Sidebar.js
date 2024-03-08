import React from 'react';

const Farmer_Sidebar = ({ onItemClick }) => {
  
    const items = ['Account', 'Product', 'Order'];

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Farmer_Sidebar
