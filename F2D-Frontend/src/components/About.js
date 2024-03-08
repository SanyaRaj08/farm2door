import React from "react";
import "../style/about.css";
import Contact from "./Contact";
import Card from "./Card";

import Farmerdelight from "./Farmerdelight";
import Aboutus from "./Aboutus";
import { Box } from "@chakra-ui/react";
const About = () => {
  return (
    <div className="about-section container " >
      <div className="headline">About Us</div>
      <div className="about-content">
        <div className="about-firstline my-4">
          Welcome to Farm2Door, a revolutionary platform that is reshaping the
          way agriculture operates in India. At Farm2Door, we are dedicated to
          empowering farmers, promoting sustainability, and connecting consumers
          with fresh, high-quality produce.
        </div>
      </div>
      <div className="delight">
      
        <div >
          <Card
            content="Empower farmers by providing a direct platform to sell their
              produce, eliminating middlemen, and ensuring fair prices. "
          />
        </div>
        <div >
          <Card
            content="Promote sustainable farming practices and reward ecologically
              conscious farmers through our Sustainability Badges feature."
          />
        </div>
        <div>
          <Card
            content=" Enhance food security by reducing food wastage, and ensuring
              consumers have access to a diverse range of fresh products."
          />
        </div>
        <div>
          <Card
            content="Foster transparency throughout the supply chain by enabling direct
              communication between farmers and buyers."
          />
        </div>
      
      </div>

      {/* JOIN OUR COMMUNITY */}
      <Aboutus />
      <div className="headline my-4">Farmers' Delights</div>
      <Farmerdelight />
      {/* <Blog /> */}
      <Contact />
    </div>
    
  );
};

export default About;
