import React from "react";
import { useState } from "react";
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
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons';


const Farmerlogin = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState('');
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const navigate = useNavigate();
    
    const handleClick = () => setShow(!show);

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  

    const SubmitHandler = async () => {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
      
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            
            email,
            password,
            
          },
          config
        );
        
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate('/FarmerContent');
      } catch (error) {
        toast({
          title: "Invalid credentials!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };
   
    return (
      <div>
        <VStack marginTop="50px">
           
          <FormControl isRequired id="email">
            <FormLabel>Email address</FormLabel>
            <Input
            value={email}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
  
          <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={password}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
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

export default Farmerlogin