import React, { useState } from "react";
import productContext from "./productContext";

const ProductState = (props) => {
  const host = "http://localhost:5000";
  const initialProduct = [];
  const initialCart = [];
  const [products, setProducts] = useState(initialProduct);
  const[cart , setCart] = useState(initialCart);

  // GET ALL products
  const getAllProducts = async () => {
    const response = await fetch(`${host}/api/products/fetchAllProducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setProducts(json);
};
 
const getAllIrrespectiveOfUser = async () => {
  const response = await fetch(`${host}/api/products/fetchAllProductsofAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  });
  const json = await response.json();
  setProducts(json);
};


  // ADD a product
  const addProduct = async (name,price,image,quantity) => {
    const response = await fetch(`${host}/api/products/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({name,price,image,quantity}),
    });
    const json = await response.json();
    console.log(json);
    const product = {
      _id: json._id,
      user: json.user,
      name : name,
      price: price,
      image: image,
      quantity: quantity,
      __v: 0,
    };
    setProducts([...products, product]);
  };

  const addToCart = (productId) => {
    // Find the product in the products array
    const productToAdd = products.find((product) => product._id === productId);

    // Check if the product is already in the cart
    const isInCart = cart.find((item) => item._id === productId);

    if (isInCart) {
      // If the product is already in the cart, increase the quantity
      setCart(
        cart.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

// //Delete a product
const deleteProduct = async(id) => {
  const response = await fetch(`${host}/api/products/deleteProduct/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    }
  });   
  const newProduct = products.filter((product) => {
    return product._id !== id;
  });
  setProducts(newProduct);
};
  return (
    <productContext.Provider
      value={{
        products,
        addProduct,
        getAllProducts,
        deleteProduct,
        getAllIrrespectiveOfUser,
        addToCart,
        cart
        
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};




export default ProductState;
