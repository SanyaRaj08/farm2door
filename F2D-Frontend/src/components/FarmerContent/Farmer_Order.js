import React, { useState } from "react";
import { Box, ChakraProvider, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style/farmer_content.css";

const Farmer_Order = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast();

  const orders = [
    {
      orderNo: "12345",
      date: "2023-11-23",
      customerDetails: "John Doe",
      prepaid: true,
      shipDate: "2023-11-25",
      status: "Shipped",
      tracking: "ABC123XYZ",
    },
    {
      orderNo: "67890",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "FTK123XYZ",
    },
    {
      orderNo: "67590",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "OPR123XYZ",
    },
    {
      orderNo: "67490",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "JUB123XYZ",
    },
    {
      orderNo: "27890",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "BHU123XYZ",
    },
    {
      orderNo: "17890",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "MNO123XYZ",
    },
    {
      orderNo: "63890",
      date: "2023-11-24",
      customerDetails: "Jane Smith",
      prepaid: false,
      shipDate: "2023-11-26",
      status: "Processing",
      tracking: "JKL123XYZ",
    },
  ];

  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleViewDetails = () => {
    toast({
      title: "No details available",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box display="flex">
        {/* Sidebar */}
        <Box paddingLeft="10" paddingRight="2" bg="rgb(50, 110, 50)" paddingTop="36">
          <ul className="farmer-content-options " color="#665039">
          <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerProduct">
                <Box padding="5">
                  <i class="fa-solid fa-cube "></i> Product
                </Box>
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerOrder">
                <Box color="#fff" padding="5" marginRight="5">
                  <i class="fa-solid fa-list-check"></i> Order
                </Box>
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#E8C897">
              <Link to="/FarmerContent">
                <Box  padding="5">
                  <i class="fa-regular fa-user "></i> Account
                </Box>
              </Link>
            </li>
          </ul>
        </Box>

        {/* Main content */}
        <Box bg="rgb(174, 225, 174)" margin="0" paddingRight="20" paddingLeft="6">
          <Box
            bg="#fff"
            color="rgb(50, 81, 50)"
            margin="5"
            paddingLeft="3"
            fontSize="large"
          >
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              className="search-button-order"
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ backgroundColor: "#fff", padding: "5px" }}
            />
          </Box>
          <Box margin="5" color="rgb(50, 81, 50)" fontWeight="medium">
            {/* Order table */}
            <table>
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th className="col-name th-margin">Date</th>
                  <th className="col-name th-margin">Customer Details</th>
                  <th className="col-name th-margin">Prepaid</th>
                  <th className="col-name th-margin">Ship Date</th>
                  <th className="col-name th-margin">Status</th>
                  <th className="col-name th-margin">Tracking</th>
                  <th className="col-name th-margin">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.orderNo}>
                    <td>{order.orderNo}</td>
                    <td className="col-name th-margin">{order.date}</td>
                    <td className="col-name th-margin">
                      {order.customerDetails}
                    </td>
                    <td className="col-name th-margin">
                      {order.prepaid ? "Yes" : "No"}
                    </td>
                    <td className="col-name th-margin">{order.shipDate}</td>
                    <td className="col-name th-margin">{order.status}</td>
                    <td className="col-name th-margin">{order.tracking}</td>
                    <td>
                      <button onClick={handleViewDetails}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Farmer_Order;

