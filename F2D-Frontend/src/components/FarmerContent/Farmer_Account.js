import React from "react"; // Import useState from React
import { Link } from "react-router-dom";
import "../../style/farmer_content.css";
import {
  Box,
  ChakraProvider,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import MyPieChart from "./MyPieChart";
import { useEffect, useState } from "react";
import myImage from "../../image/farmer_profile.png";
import { useNavigate } from "react-router-dom";

const Farmer_Account = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

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

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="row"
        bg="rgb(199, 227, 199)"
        minHeight="xl"
      >
        <Box padding="10" bg="rgb(50, 110, 50)">
          <ul className="farmer-content-options " color="#665039">
            <li className="farmer-content-options-name">
              <Link to="/FarmerProduct">
                <Box marginBottom="5" marginTop="20">
                  <i class="fa-solid fa-cube "></i> Product
                </Box>
              </Link>
            </li>
            <li className="farmer-content-options-name" color="#665039">
              <Link to="/FarmerOrder">
                <Box marginBottom="5" marginTop="5">
                  <i class="fa-solid fa-list-check"></i> Order
                </Box>
              </Link>
            </li>
            <li className="farmer-content-options-name">
              <Link to="/FarmerContent">
                <Box color="white" marginBottom="10" marginTop="5">
                  <i class="fa-regular fa-user "></i> Account
                </Box>
              </Link>
            </li>
          </ul>
        </Box>

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
              Farmer
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

            {/* User name */}
            <Text mt="4" fontWeight="bold" fontSize="xl">
              {username}
            </Text>

            {/* Email */}
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
              _hover={{backgroundColor:"white", color:"#665039"}}
              fontWeight="bold"
            >
              <button onClick={handleLogout}>Logout</button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Farmer_Account;
