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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAe1BMVEX///8AAADf39/T09N8fHzw8PDPz8/7+/v4+Pjz8/O8vLyamprk5OS5ubkMDAylpaXq6upPT09kZGRYWFhvb2+Dg4OpqanJycmPj490dHTZ2dlAQECzs7NpaWklJSWioqIfHx80NDQVFRU6OjotLS2WlpZERESBgYESEhKLqKDUAAAECUlEQVR4nO3c63qiMBAG4AYRD2DF9YTWarXa9f6vcD2UipCEAJkkdL/3f5PMIzCTSZ6+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOGxgewFWROOFZ3sN5i397Ty2vQjTvN2EsYXtVRg2GPqMscnS9jrM6pw+L1EzP9I1YKBrIELx5s81aPYa9rWNuVtrG4pGfznf3qJmbyONwy6nGgfT7/Ypu/vT0TlwzNz9wbuj2TmNmmlOX73zXut4+gTJ50/Q7GPR0zz8xMmMGC2mLIMgfc0Z0/eV1OOeqjNWBJXpkDG3Pm3r09dz1DrT10N0GXlDMG49aarO0Jq+Mq7Z0Y1S/5Kqj/moNaevjNn1USIauwovnBSCZiwh+0k21+FnVKMruqTqV07UW+3p6yG+zTAmG1/BMtlzgqbefd3fKWsbPG835Qatc/fFNb/PYuXb1h2tBEGz1x1xXdH5nsh4+dILBM/31deQfP7D91TkEz3xxqLn+2pmYLuUVoUH+qlS3eHqIImaJV0DiwjS2Y4GJrtNmLzJgmb7DV36ytqaDDy31eKYmmp+JT9Tbolnumy1pM/31Zw2fWVEj0lJK9anVoLAYWzmGb/JVsZUc8i/3ymzDfJhdmqKT6mkPnlC0WGQedoU6E6dfVH9nXcOTZ91hk/za+1DZFrBJag6DBL93OOma9x4w91fcr3b6GjPc4vQMSa3fyJE12GQ6eaX0bh26OT7g1JHWz0+P7+SRl1Wb1HoD0oZK9EKCj84Y3U7erFi0nqweYch/4azeuX64Of8UtnWZIlW0Octya82Rq/aS31n+w7DmLuqk/oA4k6ZjOkSrUiQdBKlP44qfsm+mS/RigLR4iZlJXu8kbdPhN7ou2gKZuIF7sR/1R35H7WCNtNFU9CTLvLESzZx/aAvb5D9Z/xuWLLQt7CT7TZ7m5Vy9V306c4x7Mu7wnoPUz8Jd2HiV09ZWWQHnbU0CqUKO9sQoU75inU4Eh501hOWL7q5qYPXTGuVH9X8NdYproI6aqOd4go4O1KdbG9DxNaUYfvWtyFiZeVLfQfqw/xmNkRhT5zYhkjw9+JNrdzYhsjsCMIOTRzmN7XQHbWF05BaRnrDdmSrrUBrqX5yZautQF8B49JWW8W5PCQV705ttVUUTo/qMHIpS7Nl46jb9oynGobtVjupikadCMfaSZVwT86U7Fv6jKdqVq3t+44XlF+4K2rjd7wgrhp1W+rxUsJjQ6721OPl1JP5oRV7TnWe2nmY832VGhTu7Ji7SW3UWn6dY/ULf+xUlPDvN3zMfv9/0/EWs2xW3078cdCi7kJDg2gdBME6+n8iBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhd/gFHyi8u+kmPywAAAABJRU5ErkJggg=="
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
