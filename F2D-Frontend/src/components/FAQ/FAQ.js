import React from 'react'
import { Box, ChakraProvider} from '@chakra-ui/react';
import {
 VStack
} from '@chakra-ui/react'
// import { Button } from '@chakra-ui/react'; // Added Button import
// import { ChevronDownIcon } from '@chakra-ui/icons'; // Added ChevronDownIcon import
import FAQCard from './FAQCard';
import faq_img from "../../image/faq_img.png";
import "../../style/faq/faq.css";
const FAQ = () => {
  return (
    <ChakraProvider>
    <Box bg="#665039" >
    <Box className='faq_img' bg="#B18E64">
    <img src={faq_img} alt="" />
    </Box>
    
    <Box>
    <VStack paddingBottom="10" >
      <FAQCard question="What is Farm2Door?" answer=" Farm2Door is an online platform that connects farmers directly with consumers. It eliminates intermediaries in the agricultural supply chain, allowing farmers to sell their products directly to consumers."/>
      <FAQCard question="Is Farm2Door available in my region?" answer=" Farm2Door is accessible nationwide, but the availability of products may vary by region. You can use the search function to find products in your area."/>
      <FAQCard question="How can I buy products on Farm2Door?" answer=" To buy products on Farm2Door, simply browse the platform, select the products you want, add them to your cart, and proceed to checkout."/>
      <FAQCard question="How does Farm2Door benefit farmers?" answer=" Farm2Door empowers farmers by enabling them to receive a higher share of the profits, as they can set their prices and sell directly to consumers. This leads to increased profitability."/>
      <FAQCard question="Can I trust the quality of products on Farm2Door?" answer=" Yes! We encourage farmers to provide accurate product descriptions and images. Additionally, you can read reviews from other consumers to ensure product quality."/>
      <FAQCard question="Is there a delivery service available?" answer=" Some farmers on Farm2Door offer delivery services, while others may require you to pick up the products. Delivery options if any, will be specified by the farmers on their product listings."/>
      <FAQCard question="Is there a mobile app for Farm2Door?" answer="Currently, Farm2Door is accessible through a website. However, we are actively exploring the development of a mobile app for added convenience."/>
      <FAQCard question="What are Sustainability Badges, and how do they work?" answer=" Sustainability Badges are special labels awarded to farmers. These badges indicate environmentally conscious farming and allow consumers to support such practices."/>
    </VStack>
    </Box>
    </Box>
    </ChakraProvider>
  )
}

export default FAQ
