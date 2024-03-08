import React from 'react'
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Farmerlogin from "./authorization/Farmer/Farmerlogin";
import Farmersignup from "./authorization/Farmer/Farmersignup";
import { Container } from "@chakra-ui/react";
import map_img from "../image/map_img.png";
import india1 from "../image/india1.png";


import '../style/auth/buyer.css';
import '../style/auth/farmer.css';

const customTheme = extendTheme({
    colors: {
      customColorScheme: {
        100: '#e8c897'
      },
    },
    fontSizes: {
        customFont:{
            100:"30px"
        },
        
      },
  });

const Farmerauth = () => {
  return (
    <ChakraProvider theme={customTheme}>
   <Flex  bg="beige" width="100%" height="585px">
      
   
    <Box maxW="lg" paddingTop="80px" bg="#665039" color="#e8c897" >
      <Box bg="#665039" p={3} m={3} marginLeft="100px" marginRight="100px" color="#e8c897" className='buyer_auth' fontSize="customFont">
        <Tabs variant="soft-rounded" colorScheme="customColorScheme">
          <TabList>
            <Tab width="50%" color="#e8c897">Login</Tab>
            <Tab width="50%" color="#e8c897">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Farmerlogin/>
            </TabPanel>
            <TabPanel>
              <Farmersignup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
</Box>
<Container>
<img  className='map_img' src={map_img} alt="" />
   </Container>
</Flex>
    </ChakraProvider>
  )
}

export default Farmerauth

