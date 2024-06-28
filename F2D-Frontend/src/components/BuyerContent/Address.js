// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Box, Text } from "@chakra-ui/react";

// const Address = () => {
//   return (
//     <ChakraProvider>
//       <Box textAlign="left" paddingLeft="20" paddingTop="5" paddingBottom="5" paddingRight="24">
//         <Text>
//           <i class="fa-solid fa-thumbtack icon_add"></i>Lorem ipsum dolor sit, amet
//           consectetur adipisicing elit. Odio vel enim sit sint dicta pariatur
//           ipsam doloremque corporis vitae ea optio quia nobis expedita quis
//           nihil, totam cupiditate? Aut, hic!
//         </Text>
//         <Text>
//           <i class="fa-solid fa-thumbtack icon_add"></i>Lorem ipsum dolor sit amet
//           consectetur adipisicing elit. Tenetur atque quae placeat hic? Placeat
//           sapiente molestiae odio est veritatis quas! Possimus eveniet odio
//           numquam, aut est aperiam eius id exercitationem?
//         </Text>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default Address;

import React, { useState } from "react";
import { ChakraProvider, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input } from "@chakra-ui/react";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress("");
    closeModal();
  };

  return (
    <ChakraProvider>
      <Box textAlign="left" paddingLeft="20" paddingTop="5" paddingBottom="5" paddingRight="24">
        {addresses.map((address, index) => (
          <Text key={index}>
            <i className="fa-solid fa-thumbtack icon_add"></i>
            {address}
          </Text>
        ))}
        <Button onClick={openModal} bg="white" color="#665039" mt={4}>
          Add Address
        </Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Enter your address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button bg="#e8c897" color="#665039" onClick={addAddress}>
                Save
              </Button>
              <Button onClick={closeModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default Address;
