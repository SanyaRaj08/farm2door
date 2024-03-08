import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style/farmer_content.css";

const Farmer_Order = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <ChakraProvider>
      <Box display="flex">
        <Box paddingLeft="10" paddingRight="2" bg="#b18e64" paddingTop="36">
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
                <Box color="#e8c897" padding="5" marginRight="5">
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

        {/* Search bar */}
        <Box bg="#665039" margin="0" paddingRight="20" paddingLeft="6">
          <Box
            bg="#b18e64"
            color="#665039"
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
              style={{ backgroundColor: "#b18e64", padding: "5px" }}
            />
          </Box>
          <Box margin="5" color="#e8c897">
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
                      {/* Add action buttons or links here */}
                      {/* Example: */}
                      <button onClick={() => console.log("View details")}>
                        View Details
                      </button>
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
