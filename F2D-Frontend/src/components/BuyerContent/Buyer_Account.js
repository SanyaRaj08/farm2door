import React from 'react'
import  { useState } from 'react';
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Buyer_Account = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([
    { orderNo: '12345', date: '2023-01-01', shipDate: '2023-01-05', tracking: 'ABC123', status: 'Shipped' },
    { orderNo: '67890', date: '2022-12-11', shipDate: '2023-02-05', tracking: 'XYZ456', status: 'Processing' },
    { orderNo: '12355', date: '2021-12-10', shipDate: '2023-01-05', tracking: 'ABC123', status: 'Shipped' },
    { orderNo: '77890', date: '2020-02-07', shipDate: '2023-02-05', tracking: 'XYZ456', status: 'Processing' },
    { orderNo: '82345', date: '2019-07-05', shipDate: '2023-01-05', tracking: 'ABC123', status: 'Shipped' },
    { orderNo: '87890', date: '2018-02-08', shipDate: '2023-02-05', tracking: 'XYZ456', status: 'Processing' },
    { orderNo: '85345', date: '2019-07-02', shipDate: '2023-01-05', tracking: 'GHC123', status: 'Shipped' }
    
  ]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredOrders = orders.filter(order => order.orderNo.includes(searchTerm));
  return (
<ChakraProvider>
      <Box display="flex" bg="#665039">
        <Box
          display="flex"
          flexDirection="column"
          color="#665039"
          className="buyer_content"
          paddingLeft="10"
          paddingTop="20"
        >
          <Box className="buyer_content_options" padding="5" paddingTop="10" >
            <Link to="/BuyerContent">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
          <Link to="/BuyerCart">
          <i class="fa-solid fa-cart-shopping"></i>  Cart
          </Link>
          
          </Box>
          <Box className="buyer_content_options" padding="5" color="#e8c897">
          <Link to="/BuyerAccount">
          <i class="fa-solid fa-user"></i>  Account
          </Link>
          </Box>
        </Box>
        <Box className='buyer_account' paddingLeft="16" paddingBottom="20">
        <h1>Account Page</h1>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className="search-button-order"
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: "#b18e64", padding: "5px" }}
            />
      {/* <input
        className='buyer_account_search'
        type="text"
        placeholder="Search by Order Number"
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      <table>
        <thead>
          <tr>
            <th className='account_th account_th_order'>Order No.</th>
            <th className='account_th  account_th_date'>Date</th>
            <th className='account_th '>Ship Date</th>
            <th className='account_th'>Tracking</th>
            <th className='account_th account_th_status'>Status</th>
          </tr>
        </thead>
        <tbody className='buyer_account_content'>
          {filteredOrders.map(order => (
            <tr key={order.orderNo}>
              <td className='buyer_account_content'>{order.orderNo}</td>
              <td >{order.date}</td>
              <td>{order.shipDate}</td>
              <td>{order.tracking}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Buyer_Account
