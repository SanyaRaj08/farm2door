import React from 'react';
import { ChakraProvider, Box, Image, Text, Flex, useToast } from "@chakra-ui/react";
import "../../style/Buyer_Content.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import myImage from "../../image/buyer_profile.png";

const Buyer_Account = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast(); // Initialize toast

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received data:", data);
        setUsername(data.name);
        setEmail(data.email);
      } else {
        console.error("Failed to fetch user info");
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");

    // Log content before removal
    console.log("Before logout:", localStorage.getItem("userInfo"));

    localStorage.removeItem("userInfo");

    // Log content after removal
    console.log("After logout:", localStorage.getItem("userInfo"));

    // Show toast
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <ChakraProvider>
      <Box display="flex" bg="rgb(174, 225, 174)">
        <Box
          display="flex"
          flexDirection="column"
          color="rgb(174, 225, 174)"
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
          <Box className="buyer_content_options" padding="5" color="white">
          <Link to="/BuyerAccount">
          <i class="fa-solid fa-user"></i>  Account
          </Link>
          </Box>
        </Box>
        <Box className='buyer_account' paddingLeft="16" paddingBottom="20" bg="rgb(174, 225, 174)">
        <Box
          maxW="md"
          marginLeft="9"
          height="96"
          borderRadius="lg"
          boxShadow="md"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          mt="86"
          width="xl"
        >
          <Flex direction="column" alignItems="center" p="4">
            <Text color="black" fontWeight="extrabold" fontSize="2xl">
              Buyer
            </Text>
            {/* Profile picture */}
            <Box borderRadius="full" boxShadow="lg">
              <Image
                src={myImage}
                alt="Profile Picture"
                borderRadius="full"
                boxSize="150px"
              />
            </Box>

            <Text mt="4" fontWeight="bold" fontSize="xl">
              {username}
            </Text>

            <Text mt="2" color="gray.600" fontWeight="bold">
              {email}
            </Text>
            <Box
              bg="green.800"
              borderRadius="full"
              boxShadow="md"
              width="24"
              height="8"
              color="white"
            >
              <button onClick={handleLogout}>Logout</button>
            </Box>
          </Flex>
        </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Buyer_Account;

