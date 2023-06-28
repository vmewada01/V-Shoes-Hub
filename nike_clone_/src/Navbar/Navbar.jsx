import {
  Box,
  Button,
  Drawer,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { MoonIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerExample from "./DrawerExample";
import { useSelector } from "react-redux";
import {FaMoon} from "react-icons/fa"
import {FaSun} from "react-icons/fa"

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
   const cart= useSelector((store)=> store.cart_reducer.cart)
   //console.log(cart.length)
   const cartLength = cart.reduce((acc,curr)=> acc+ (curr.qty),0)
   const data = useSelector((store)=> store.wish_list.wishlist)
 
   const [theme, setTheme] = useState("light-theme")

   const toggleTheme=()=> {
    if(theme==="dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
   }
  

     useEffect(()=> {
    document.body.className= theme;
     },[theme])

   const handleTheme=()=> {
      setTheme(!theme)
   }

   const Style = {
    color: "black"
  };
  const activeStyle = {
    color: "gray"
  };


   return (
    <Box>
      <Box className="navbar">
        <Flex className="top-navbar-signup">
        <Link to="/login"><Button variant="ghost">Sign In</Button></Link>
       <Box onClick={toggleTheme}>{theme==="light-theme" ?   <FaSun size={'20px'} /> : <FaMoon/>} </Box>
       
        
        </Flex>
      </Box>

      <Box className="bottom-navbar-signup">
        <Box>
          <Image
            src="https://mohit-nikeclone.netlify.app/assets/Nike-logo.868b342b.png"
            width="60px"
          />
        </Box>

        <Box className="navbar-middle">
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
        </Box>

        <Box className="navbar-icon-style">
          <Box className="cart-logo-div">
            <Link to='/wishlist'>
          <Box className="cart-logo">{data.length}</Box>

            <FavoriteBorderIcon style={{ fontSize: "40px" }} />{" "}
            </Link>
          </Box>
          <Box className="cart-logo-div">
            <Box className="cart-logo">{cartLength}</Box>
            <Link to="/cart">
            <ShoppingCartIcon style={{ fontSize: "40px" }} />
            </Link>
          </Box>
          <Box className="navbar-menu-list" onMouseLeave={onClose} onMouseEnter={onOpen}  >
            {" "}
            <DrawerExample isOpen={isOpen} onClose={onClose}  />
              {" "}
              <MenuIcon style={{ fontSize: "40px" }} />
           
          </Box>
        </Box>
      </Box>

      </Box>
  );
};

export default Navbar;
