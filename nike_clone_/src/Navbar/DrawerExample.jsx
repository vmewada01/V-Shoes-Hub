import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, RadioGroup, useDisclosure } from "@chakra-ui/react"
import  { useRef, useState } from "react"
import React from "react";
import { Link, NavLink } from "react-router-dom";


function DrawerExample({isOpen,onClose}) {

   const [placement, setPlacement]= useState('right')
 
    const btnRef = React.useRef()
    const Style = {
      color: "black"
    };
    const activeStyle = {
      color: "gray"
    };
  
    return (
      <>
       <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
        <Drawer
          isOpen={isOpen}
          placement={placement}
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
            <Box>
            <NavLink style={({isActive})=> (isActive? activeStyle : Style)} key="Home" to="/">Home</NavLink>
          </Box>
          <Box>
            <NavLink style={({isActive})=> (isActive? activeStyle : Style)} key="All Products" to="/products">All Products</NavLink>
          </Box>
          <Box>
            <NavLink style={({isActive})=> (isActive? activeStyle : Style)} key="Men" to="/men">Men</NavLink>
          </Box>
          <Box>
            <NavLink style={({isActive})=> (isActive? activeStyle : Style)} key="Women" to="/women">Women</NavLink>
          </Box>
          <Box>
            <NavLink style={({isActive})=> (isActive? activeStyle : Style)} key="Kids" to="/kids">Kids</NavLink>
          </Box>


            </Flex>
  
           
            
           
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample