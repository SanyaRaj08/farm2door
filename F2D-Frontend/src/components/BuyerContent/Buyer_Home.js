import React, { useState , useContext, useEffect} from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import productContext from "../../Contexts/smallProducts/productContext";
import { Link } from "react-router-dom";

const Buyer_Home = () => {
 const context = useContext(productContext);
   const {products, addToCart, getAllIrrespectiveOfUser} = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllIrrespectiveOfUser();
    } else {
      // Handle unauthorized access here, e.g., redirect to login
    }
  }, [getAllIrrespectiveOfUser]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    console.log("Added to Cart");
  };



  return (
    <ChakraProvider>
    <Box bg="#e8c897" >
      <Box display="flex"  minHeight="xl" >
        <Box
          display="flex"
          flexDirection="column"
          color="#665039"
          className="buyer_content"
          paddingLeft="10"
          paddingTop="20"
          minWidth="80"
        >
          <Box
            className="buyer_content_options"
            padding="5"
            paddingTop="10"
            color="#e8c897"
          >
            <Link to="/BuyerContent">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
            <Link to="/BuyerCart">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </Link>
          </Box>
          <Box className="buyer_content_options" padding="5">
            <Link to="/BuyerAccount">
              <i class="fa-solid fa-user"></i> Account
            </Link>
          </Box>
        </Box>
        <Box className="buyer_home"  width="max" >
          <Box className="home" >
            <Box className="item-container" margin="5" padding="5">
              {products.map((item) => (
                <div key={item.id} className="card">
                  <h2>{item.name}</h2>
                  <img className="buyer_img" src={item.image} alt={item.name} style={{ width: '100px', height: '100px'  }} />
                  
                  <p>Price: ${item.price}</p>
                  {item.inCart ? (
                    <Link to="/BuyerCart">
                      <button className="button b_view" >View in Cart</button>
                    </Link>
                  ) : (
                    <button className="button" onClick={() => handleAddToCart(item._id)}>
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Home;
