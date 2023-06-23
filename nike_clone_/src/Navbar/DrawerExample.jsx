import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, useDisclosure } from "@chakra-ui/react"
import  { useRef } from "react"
import React from "react";
import { Link } from "react-router-dom";


function DrawerExample({isOpen,onClose}) {
 
    const btnRef = React.useRef()
  
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
   
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="black"  size="90px" />
            <Box >
            <Box margin="auto"> <Image
            src="https://mohit-nikeclone.netlify.app/assets/Nike-logo.868b342b.png"
            width="60px"
          /></Box>


            <Flex className="drawer-style" >
            <Box><Link>Home</Link></Box>
            <Box ><Link>All Products</Link></Box>
            <Box><Link>Men's</Link></Box>
            <Box><Link>Women's</Link></Box>
            <Box><Link>Kids</Link></Box>


            </Flex>
  
           
            
           
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample