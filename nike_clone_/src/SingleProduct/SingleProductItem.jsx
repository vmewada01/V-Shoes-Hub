import { SpinnerIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleData } from "../Redux/AppReducer/singleProduct/action";
import { addToCart } from "../Redux/AppReducer/Cart/action";
import { addToWishList } from "../Redux/AppReducer/wishlist/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id)
  const dispatch = useDispatch();
  const data = useSelector((store) => store.singleProduct);
  const item = data.products;
  const [gaveAlert, setAlert] = useState(false);
  // console.log(item)
  const loading = useSelector((store)=> store.AppReducer.isLoading)
  // console.log(loading)
  useEffect(() => {
    dispatch(getSingleData(id));
  }, []);

  const CartDetails = (item) => {
    dispatch(addToCart(item));
    //alert("item added to cart");
    toast("Item Added to Cart");
  };

  const wishlistfunction = (item) => {
    dispatch(addToWishList(item));
   // alert("item added to Wishlist");
   toast("Item Added to Wishlist")
  };

  //  const picture=  item?.images
  //  //console.log(picture[0].url)

  // const [currentImg, setCurrentImg] = useState(picture[0])

  return (
    <Box w={{ lg: "80%" }} m="auto" pt={"20px"} pb="20px">
   <Box display="flex" justifyContent='center' alignContent={'center'} margin='auto'>
        {loading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='white'
            color='blue.500'
            size='xl'
            />}</Box>
     
      {item && (
        <Flex
          w={{ lg: "100%" }}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          margin="auto"
        >
          <Box w={{ md: "70%", lg: "50%" }} m="auto">
            <Box
              w={{ base: "70%", sm: "60%", md: "60%", lg: "80%" }}
              h={{ base: "200px", sm: "250", md: "300px", lg: "500px" }}
              m="auto"
              boxSizing={"border-box"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Image
                objectFit={"contain"}
                w={{ base: "100%", lg: "100%" }}
                h={"100%"}
                transition={"all 0.5s"}
                _hover={{ transform: "scale(1.5)", transition: "all 0.6s" }}
                display={"block"}
                src={item.imageSrc}
              />
            </Box>

            <Box>
              <Flex w={"80%"} m={"auto"} gap="10px" pt={"15px"}>
                {item?.images?.map((ele,ind) => {
                //  console.log(item.rating)
                  return (
                    <Box
                      key={ind}
                      border="1px solid #e1e1e1"
                      w={"20%"}
                      p="8px"
                      m={"auto"}
                    >
                      <Image
                        objectFit={"contain"}
                        src={ele.url}
                        w="100%"
                        h={{ base: "40px", md: "80px" }}
                      />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Box>
          <Box
            w={{ base: "85%", sm: "80%", md: "60%", lg: "60%" }}
            textAlign={"left"}
            pl={{ base: "0px", md: "10px", lg: "30px" }}
            m={"auto"}
          >
            <Text fontWeight={"550"} fontSize={"18px"} pb="12px">
              {item.title}
            </Text>
            <Text fontWeight={"550"} fontSize={"18px"} pb="12px">
              {item.brand}
            </Text>
            <Text
              fontWeight={"550"}
              fontSize={"18px"}
              color={"#8d8d8d"}
              pb="12px"
            >
              {item.category}
            </Text>
            <Text fontWeight={"650"} fontSize={"18px"} pb="12px">
              ₹ {item.price}
            </Text>
            <Box display="flex" mt="2" alignItems="center" pb="12px">
              {Array(5)
                .fill("")
                .map((_, i) =>
                 
                (
                  <StarIcon
                    key={i}
                    color={i < +(item.rating) ? "#ffa41c" : "gray.300"}
                  />
                ))}
            </Box>
            <Flex
              direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
              gap="10px"
            >
              <Button
                bg={"rgb(84,98,111)"}
                color={"white"}
                w={{ sm: "40%" }}
                _hover={{
                  bg: 'black',
                  color: "white",
                  
                }}
                onClick={() => CartDetails(item)}
              >
                Add To Cart
              </Button>
              <Button
                bg={"rgb(84,98,111) "}
                color={"white"}
                w={{ sm: "40%" }}
                _hover={{
                  bg: 'black',
                  color: "white",
                  
                }}
                onClick={() => wishlistfunction(item)}
              >
                Add To Wishlist
              </Button>
              {}
            </Flex>
            <Box>
              <TableContainer>
                <Table
                  variant="simple"
                  size={{ base: "sm", sm: "sm", md: "md" }}
                >
                  <TableCaption>Product Specification</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>feature</Th>
                      <Th>Info</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Color</Td>
                      <Td>White</Td>
                    </Tr>
                    <Tr>
                      <Td>Outer material</Td>
                      <Td>Synthetic Leather</Td>
                    </Tr>
                    <Tr>
                      <Td>Sole Material</Td>
                      <Td>Rubber</Td>
                    </Tr>
                    <Tr>
                      <Td>Closure</Td>
                      <Td>Lace -Ups</Td>
                    </Tr>
                    <Tr>
                      <Td>Model name</Td>
                      <Td>{item.brand}</Td>
                    </Tr>
                    <Tr>
                      <Td>Occasion</Td>
                      <Td>Sports</Td>
                    </Tr>
                    <Tr>
                      <Td>Ideal for</Td>
                      <Td>{item.category}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Flex>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};

export default SingleProduct;
