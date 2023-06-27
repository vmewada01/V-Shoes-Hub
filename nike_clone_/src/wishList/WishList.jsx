import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WishList.css";
import { removeFromWishlist } from "../Redux/AppReducer/wishlist/action";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const data = useSelector((store) => store.wish_list.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  // console.log(data.length);

  const RemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist({ id }));
  };
  const handleWishDetails = (id) => {
    navigate(`/products/${id}`);
  };
  const hanldeWishhover = () => {
    setFlag(true);
  };

  const handleWishLeave = () => {
    setFlag(false);
  };

  return (
    <Box className="main-box">
      <Box padding={"1rem"}>
        <Heading> ❤ WISHLIST ITEMS</Heading>
        <Heading>{data.length} ITEMS</Heading>
        <Text>
          List of your favourite items. You can BUY them by just clicking on
          ITEM.
        </Text>
        <Text>
          By Clicking on them you can get all the details about the Items and
          then go for Checkout.
        </Text>
      </Box>
     


      <Box className="grid">
        {data.length > 0 &&
          data.map((item) => {
            // console.log(data.length)
            // console.log(item.imageSrc)
            return (
              <Box className="flex" key={item.id}>
                <Box>
                  <Button onClick={() => RemoveFromWishlist(item.id)}>
                    <CloseIcon color={"red"} />
                  </Button>
                </Box>

                <Box
                  onMouseEnter={hanldeWishhover}
                  onMouseLeave={handleWishLeave}
                  onClick={() => handleWishDetails(item.id)}
                  border={"1px solid teal"}
                >
                  <Image src={item.imageSrc} alt={"Items Images"} />
                  <Text fontWeight={"bold"}>{item.title}</Text>
                  {flag && (
                    <Flex fontWeight={"bold"} justifyContent={"space-around"}>
                      <Text color={"red"}>{item.brand}</Text>
                      <Text>{item.price}</Text>
                    </Flex>
                  )}
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default WishList;
