import React from 'react'
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Buyerlogin from "./authorization/Buyer/Buyerlogin";
import Buyersignup from "./authorization/Buyer/Buyersignup";
import { Container } from "@chakra-ui/react";
import '../style/auth/buyer.css';
import map_img from "../image/map_img.png";

const customTheme = extendTheme({
    colors: {
      customColorScheme: {
        100: 'rgb(50, 81, 50)'
      },
    },
    fontSizes: {
        customFont:{
            100:"30px"
        },
        
      },
  });

const Buyerauth = () => {
  return (
    <ChakraProvider theme={customTheme}>
      
   
   <Box
      className='login_bg'
      id='login_bg2'
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="97vh" // Adjust the height to fit your design
        marginY="5"
      >
    <Box
        
        bg="rgba(255, 255, 255, 0.8)"
        p={'5'}
        m={3}
        borderRadius="lg"
        color="rgb(50, 81, 50)"
        className='buyer_auth'
        fontSize="customFont"
        width="md"
      >
        <Tabs variant="soft-rounded" colorScheme="customColorScheme">
          <TabList>
          <Tab width="50%" color="rgb(50, 81, 50)">Login</Tab>
          <Tab width="50%" color="rgb(50, 81, 50)">Signup</Tab>
          </TabList>
          <TabPanels >
            <TabPanel >
              <Buyerlogin/>
            </TabPanel>
            <TabPanel>
              <Buyersignup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
</Box>
   
    </ChakraProvider>
  )
}

export default Buyerauth
