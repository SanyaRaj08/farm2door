import React, { useContext } from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";
import productContext from "../../Contexts/smallProducts/productContext";
import Address from "./Address";

const Buyer_Cart = ({ removeItem, calculateTotal, handleCheckout }) => {
  const context = useContext(productContext);
  const { cart } = context;
  return (
    <ChakraProvider>
      <Box bg="#665039">
        <Box display="flex" minHeight="xl">
          <Box
            display="flex"
            flexDirection="column"
            color="#665039"
            className="buyer_content"
            paddingLeft="10"
            paddingTop="20"
            width="xl"
          >
            <Box className="buyer_content_options" padding="5" paddingTop="10">
              <Link to="/BuyerContent">
                <i class="fa-solid fa-house"></i> Home
              </Link>
            </Box>
            <Box className="buyer_content_options" padding="5" color="#e8c897">
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
          <Box className="buyer_home" bg="#e8c897" width="8xl">
            <div className="cart">
              <h2>Shopping Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item card">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <button
                        className="button"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  ))}
                  {/* <p>Total: ${calculateTotal()}</p> */}
                  <button className="b_chck" onClick={handleCheckout}>
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </Box>
          <Box textAlign="center">
            <Box
              // marginLeft="96"
              bg="#665039"
              color="#b18e64"
              className="address"
            >
              <Box paddingTop="5" fontSize="4xl" fontWeight="medium">
                Your Address
              </Box>
              <Address />
            </Box>

            <Box
              className="address"
              bg="#665039"
              color="#b18e64"
            >
              <h1>Contact Us</h1>
              <Box
                textAlign="left"
                paddingLeft="20"
                paddingTop="2"
                paddingBottom="3"
              >
                <Box className="add">
                  <i class="fa-solid fa-phone-volume icon_add"></i>
                  +91 xxxxxxxxxx
                </Box>
                <div className="add">
                  <i class="fa-solid fa-envelope icon_add"></i>
                  farm2door@gmail.com
                </div>
                <div className="add">
                  <i class="fa-solid fa-location-dot icon_add"></i>
                  Katpadi , Vellore
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Buyer_Cart;


