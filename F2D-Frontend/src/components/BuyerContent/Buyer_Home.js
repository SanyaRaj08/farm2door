import React, { useState, useContext, useEffect } from "react";
import { Box, ChakraProvider, useToast, Input, Select } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import productContext from "../../Contexts/smallProducts/productContext";
import { Link } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Button
} from "@chakra-ui/react";



const fakeReviews = [
  { id: 1, username: "John Doe", review: "Great product! I highly recommend it." },
  { id: 2, username: "Jane Smith", review: "Good quality and fast delivery." },
  { id: 3, username: "David Johnson", review: "Exactly what I was looking for. Very satisfied." }
];

const Buyer_Home = () => {
  const context = useContext(productContext);
  const { products, addToCart, getAllIrrespectiveOfUser } = context;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllIrrespectiveOfUser();
    } else {
      // Handle unauthorized access here, e.g., redirect to login
    }
  }, [getAllIrrespectiveOfUser]);

  const toast = useToast();

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast({
      title: "Item added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "highToLow") {
      return b.price - a.price;
    } else if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  const handleReviewButtonClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider>
      <Box bg="rgb(174, 225, 174)">
        <Box display="flex" minHeight="xl">
          <Box
            display="flex"
            flexDirection="column"
            color="rgb(174, 225, 174)"
            className="buyer_content"
            paddingLeft="10"
            paddingTop="20"
            minWidth="80"
          >
            <Box
              className="buyer_content_options"
              padding="5"
              paddingTop="10"
              color="white"
            >
              <Link to="/BuyerContent" >
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
          <Box className="buyer_home" width="max" color="white" bg="rgb(174, 225, 174)">
          <Box display="flex" flexDirection="row" >
          <Box width="3xl"  marginLeft="10" marginRight="3" >
          <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              marginBottom="3"
              color="rgb(50, 81, 50)"
              border="solid "
            />

          </Box>
          <Box>
          <Select
              placeholder="Sort by"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              marginBottom="3"
              color="rgb(50, 81, 50)"
              border="solid "
            >
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </Select>

          </Box>
            
          </Box>

            <Box className="home" color="white">
              <Box
                className="item-container"
                margin="5"
                padding="5"
                color="white"
              >
                {sortedProducts.map((item) => (
                  <div key={item.id} className="card">
                    <h4 style={{ color: "#FFFFFF" }}>{item.name}</h4>
                    <img
                      className="buyer_img"
                      src={item.image}
                      alt={item.name}
                      style={{ width: "100px", height: "100px", color: "#FFFFFF" }}
                    />
                    <p style={{ color: "#FFFFFF" }}>Price: ₹{item.price}</p>
                    {item.inCart ? (
                      <Link to="/BuyerCart">
                        <button className="button b_view">View in Cart</button>
                      </Link>
                    ) : (
                      <>
                        <button
                          className="button"
                          onClick={() => handleAddToCart(item._id)}
                        >
                          Add to Cart
                        </button>
                        <button 
                          className="button"
                          onClick={() => handleReviewButtonClick(item)}
                        >
                          Product Review
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Modal for product reviews */}
      
      <Modal isOpen={isModalOpen} onClose={closeModal} style={{ backgroundColor: '#000' }}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader style={{ color:"aliceblue" , backgroundColor:"#000"}}>Product Reviews for {selectedProduct?.name}</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
      {fakeReviews.map((review) => (
        <Box key={review.id} marginBottom="3">
          <Text fontSize="large" fontWeight="bold">{review.username}</Text>
          <Text>{review.review}</Text>
        </Box>
      ))}
    </ModalBody>
    <ModalFooter fontWeight="bold">
      <Button colorScheme="teal" mr={3} onClick={closeModal}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

      
    </ChakraProvider>
  );
};

export default Buyer_Home;


