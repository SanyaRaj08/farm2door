import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const Farmer_Product = () => {
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="row" bg="#665039" minHeight="xl" >
        <Box padding="10" bg="#B18E64">
          <ul className="farmer-content-options " color="#665039" >
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerProduct">
              <Box color="#e8c897" marginBottom="5" marginTop="20">
              <i class="fa-solid fa-cube "></i> Product
              </Box>
                
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerOrder" >
              <Box marginBottom="5" marginTop="5">
              <i class="fa-solid fa-list-check"></i> Order
              </Box>
               
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#E8C897">
              <Link to="/FarmerContent">
              <Box marginBottom="10" marginTop="5"> 
              <i class="fa-regular fa-user "></i> Account
              </Box>
                
              </Link>
            </li>
          </ul>
        </Box>
        <Box bg="#665039" paddingRight="10" paddingLeft="10" paddingTop="5">
          <ProductList/>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Farmer_Product;
