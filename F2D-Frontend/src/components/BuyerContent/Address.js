import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

const Address = () => {
  return (
    <ChakraProvider>
      <Box textAlign="left" paddingLeft="20" paddingTop="5" paddingBottom="5" paddingRight="24">
        <Text>
          <i class="fa-solid fa-thumbtack icon_add"></i>Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Odio vel enim sit sint dicta pariatur
          ipsam doloremque corporis vitae ea optio quia nobis expedita quis
          nihil, totam cupiditate? Aut, hic!
        </Text>
        <Text>
          <i class="fa-solid fa-thumbtack icon_add"></i>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tenetur atque quae placeat hic? Placeat
          sapiente molestiae odio est veritatis quas! Possimus eveniet odio
          numquam, aut est aperiam eius id exercitationem?
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Address;