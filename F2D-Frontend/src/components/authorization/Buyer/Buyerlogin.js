import React from "react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';




const Buyerlogin = () => {
    const [credentials , setCredentials] = useState({ email: "", password: "" });
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = useState(false);
   

    const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const toast = useToast();
    const navigate = useNavigate();
    
   

    const SubmitHandler = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
    
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
        localStorage.setItem('token', json.authtoken);
        navigate('/BuyerContent');
      } else {
        toast.error('Wrong credentials');
      } 
    }; 
   
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <VStack marginTop="50px">
           
          <FormControl isRequired id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              value={credentials.email}
              type="email" 
              name = "email"
              placeholder="Enter Your Email"
              onChange={onChange}
            />
          </FormControl>
  
         

          <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={credentials.password}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          name = "password"
          placeholder="Enter password"
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          {showPassword ? (
            <ViewOffIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <ViewIcon
              h="1.75rem"
              w="1.75rem"
              cursor="pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  
          
  
          <Button bg="#e8c897" size="md" width="100%" onClick={SubmitHandler}>
            Login
          </Button>

        </VStack>
      </div>
    );
}

export default Buyerlogin
