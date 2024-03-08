import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"; // Added Button import
import { ChevronDownIcon } from "@chakra-ui/icons";

const FAQCard = (props) => {
  return (
    <ChakraProvider>
      <Menu bg="#B18E64">
        <MenuButton
          fontStyle="normal"
          fontWeight="bold"
          lineHeight="normal"
          whiteSpace="break-spaces" // Allows word wrap
          wordWrap="break-word" // Allows word wrap
          _hover={{ bg: "#B18E64" }}
          _expanded={{ bg: "#B18E64" }}
          _focus={{ boxShadow: "outline" }}
          className="question"
          color="#E8C897"
          bg="#B18E64"
          marginTop="10"
          padding="3"
          paddingLeft="5"
          height={["auto"]}
          width="80%"
          fontSize="2xl"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          marginLeft="28"
          marginRight="28"
          textAlign="left"
          boxShadow="2xl"
        >
          {props.question}
        </MenuButton>

        <MenuList
          whiteSpace="break-spaces" // Allows word wrap
          wordWrap="break-word"
          height="auto"
          className="answer"
          bg="#B18E64"
          color="#E8C897"
          fontSize="xl"
          fontWeight="bold"
          // width={[ "200px","720", "1105px"]}
          maxWidth="7xl"
        >
          <MenuItem
            className="answer"
            fontSize="xl"
            bg="#B18E64"
            paddingLeft="10"
          >
            <span>{props.answer}</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default FAQCard;
