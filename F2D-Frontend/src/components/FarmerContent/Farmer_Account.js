import React from "react"; // Import useState from React
import { Link } from "react-router-dom";
import "../../style/farmer_content.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import MyPieChart from "./MyPieChart";
import MyBarChart from "./MyBarChart";

const Farmer_Account = () => {
  return (
    <ChakraProvider>
      <Box className="farmer-content">
        <Box display="flex" flexDirection="row">
          <Box margin="10"  marginTop="40" width="40">
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
              <Box padding="5" marginRight="5">
              <i class="fa-solid fa-list-check"></i> Order
              </Box>
              
              </Link>
              </li>
              <li className="farmer-content-options-name" color="#E8C897">
              <Link to="/FarmerContent">
              <Box color="#e8c897" padding="5">
              <i class="fa-regular fa-user "></i> Account
              </Box>
              
              </Link>
                
              </li>
            </ul>
          </Box>
          <Box bg="#665039" marginLeft="20">
            <Box display="flex" flexDirection="row" className="account_detail">
              <Box bg="#E8C897" margin="5" borderRadius="md" padding="5">
                Total Sales
                <Box>
                  50,000
                </Box>
              </Box>
              <Box bg="#E8C897" margin="5" borderRadius="md" padding="5">
                Order Count
                <Box>
                  600
                </Box>
              </Box>
            </Box>
            <Box
              bg="#E8C897"
              padding="5"
              margin="5"
              borderRadius="md"
              textAlign="center"
            >
              Order Status
              <MyPieChart />
            </Box>
          </Box>
          <Box bg="#E8C897" padding="10" textAlign="center">
            Customer Reviews
            <MyBarChart />
            <Box className="customer_rev" textAlign="start"  padding="5">
              <Box bg="#665039" borderRadius="md" margin="2" padding="5" color="#FFF">
                Ram
                <Box color="#FDCC0D">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </Box>
                
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
                magnam sit! Debitis cupiditate dolore, id, autem officiis
                molestias reprehenderit delectus perferendis corrupti aspernatur
                ullam porro aliquid, illum dignissimos a illo!
              </Box>
              <Box bg="#665039" borderRadius="md" margin="2" padding="5" color="#FFF">
                Mohan
                <Box color="#FDCC0D">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </Box>
                
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                optio officiis, necessitatibus quo laudantium ratione esse
                eveniet vitae repellat a quidem suscipit nihil eum accusamus
                accusantium dicta molestiae aliquid. Doloribus.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Farmer_Account;
