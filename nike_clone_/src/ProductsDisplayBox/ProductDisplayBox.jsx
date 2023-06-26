import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductDisplayBox = ({ item }) => {
  return (
    <Box>
      <Link to={`/products/${item.id}`}>
      <Box className="transition" >
        <Image src={item.imageSrc} />
      </Box>
      <Box>{item.title}</Box>
      <Box>
        <Text as="b">{item.category}</Text>
      </Box>

      <Box>
        <Text as="b">{item.brand}</Text>
      </Box>

      <Box>
        <Text as="b">MRP : ₹{item.price}</Text>
      </Box>
      <Box>
        <button style={{ backgroundColor: "green", color: "white" }}>
          ★{item.rating}
        </button>
      </Box>
      </Link>
    </Box>
  );
};

export default ProductDisplayBox;
