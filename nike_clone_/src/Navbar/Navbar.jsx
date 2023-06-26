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
import React from "react";
import "./Navbar.css";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerExample from "./DrawerExample";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box className="navbar">
        <Flex className="top-navbar-signup">
          <Button variant="ghost">Sign up</Button>
          <NightlightRoundIcon />
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
            <Link to="/">Home</Link>
          </Box>
          <Box>
            <Link to="/products">New & Featured</Link>
          </Box>
          <Box>
            <Link to="/men">Men</Link>
          </Box>
          <Box>
            <Link to="/women">Women</Link>
          </Box>
          <Box>
            <Link to="/kids">Kids</Link>
          </Box>
        </Box>

        <Box className="navbar-icon-style">
          <Box>
            <FavoriteBorderIcon style={{ fontSize: "40px" }} />{" "}
          </Box>
          <Box>
            <ShoppingCartIcon style={{ fontSize: "40px" }} />
          </Box>
          <Box className="navbar-menu-list" onClick={onOpen} >
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
