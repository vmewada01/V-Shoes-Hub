import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductDisplayBox = ({ item }) => {
  return (
    <Box>
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
    </Box>
  );
};

export default ProductDisplayBox;
