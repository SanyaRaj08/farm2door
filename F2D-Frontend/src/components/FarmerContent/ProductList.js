import React, { useContext, useState, useEffect } from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import productContext from "../../Contexts/smallProducts/productContext";

const ProductList = () => {
  const context = useContext(productContext);
  const { products, addProduct, getAllProducts, deleteProduct , getAllIrrespectiveOfUser } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllProducts();
    } else {
      // Handle unauthorized access here, e.g., redirect to login
    }
  }, [getAllProducts]);

  const [showModal, setShowModal] = useState(false);
  const [producte, setProducte] = useState({
    name: "",
    price: "",
    image: "",
    quantity: "",
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    // Update local state
    setProducte({ ...producte, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    // Call addProduct from context
    addProduct(producte.name, producte.price, producte.image, producte.quantity);

    // Clear local state
    setProducte({
      name: "",
      price: "",
      image: "",
      quantity: "",
    });

    // Close the modal
    closeModal();
  };

  return (
    <ChakraProvider>
      <div>
        <button className="add_button" onClick={openModal}>
          <i className="fa-solid fa-plus"></i> Add new Product
        </button>
      </div>

      {showModal && (
        <Box className="modal">
          <Box
            className="modal-content"
            width="80"
            bg="#b18e64"
            color="#e8c897v"
            fontFamily="serif"
            fontSize="xl"
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <label>Name:</label>
            <input
              className="input_box"
              type="text"
              name="name"
              value={producte.name}
              onChange={handleChange}
            />
            <label>Price:</label>
            <input
              className="input_box"
              type="text"
              name="price"
              value={producte.price}
              onChange={handleChange}
            />
            <label>Image URL:</label>
            <input
              className="input_box"
              type="text"
              name="image"
              value={producte.image}
              onChange={handleChange}
            />
            <label>Quantity in Stock:</label>
            <input
              className="input_box"
              type="text"
              name="quantity"
              value={producte.quantity}
              onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
          </Box>
        </Box>
      )}

      <Box className="product-list" display="flex" flexWrap="wrap">
        {products.map((product, index) => (
          <Box
            key={index}
            className="product-card"
            width="72"
            marginRight="5" marginTop="5" marginBottom="5" 
            bg="#E8C897"
            color="#665039"
            display="flex"
          >
            <Box paddingTop="2">
              <img
                src={product.image}
                alt={product.name}
                className="product_img"
              />
            </Box>
            <Box padding="2">
              <h3>{product.name}</h3>
              <p>Price: {product.price} Rs</p>
              <p>{product.quantity} kgs in stock</p>
              <Button
                color="#665039"
                bg="#E8C897"
                onClick={()=>{deleteProduct(product._id)}} // Replace with actual delete functionality
              >
                <i className="fa-solid fa-trash fa-lg"></i>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default ProductList;
