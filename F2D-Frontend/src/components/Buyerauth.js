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
        100: '#e8c897'
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
   <Flex  bg="beige" width="100%" height="585px">
      
   
    <Box width="xl" paddingTop="80px" bg="#665039" color="#e8c897" >
      <Box bg="#665039" p={3} m={3} marginLeft="100px" marginRight="100px" color="#e8c897" className='buyer_auth' fontSize="customFont">
        <Tabs variant="soft-rounded" colorScheme="customColorScheme">
          <TabList>
            <Tab className='tab_name' fontSize="2xl" width="50%" color="#e8c897" letterSpacing="1px">Login</Tab>
            <Tab className='tab_name' fontSize="2xl" width="50%" color="#e8c897" letterSpacing="1px">Signup</Tab>
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
<Container>
<img  className='map_img' src={map_img} alt="" />
   </Container>
   
</Flex>
    </ChakraProvider>
  )
}

export default Buyerauth
