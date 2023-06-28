import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  checkCharacter,
  checkEmail,
  checkFormEmpty,
  checkMobile,
  checkPinCode,
  setToast,
} from "./CheckProperty";
import { displayRazorpay } from "../Razorpay/Razorpay";

const initialState = {
  firstName: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  locality: "",
  pinCode: "",
  state: "",
  country: "",
  email: "",
  mobile: "",
};
const Checkout = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const data = useSelector((store) => store.cart_reducer.cart);

  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  //console.log(auth)
  const Total = data.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const cartLength = data.reduce((acc, curr) => acc + curr.qty, 0);
  //  console.log(Total)
  //  console.log(cartLength)
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  //  console.log(form)

  const handleFormValidation = (form) => {
    const isEmpty = checkFormEmpty(form);
    //console.log(isEmpty)
    if (!isEmpty.status) {
      toast(isEmpty.message);
      return isEmpty.status;
    }
    const isFirstname = checkCharacter(form.firstName);
    if (!isFirstname.status) {
     toast(isFirstname.message)
     return 
    }
    const isLastname = checkCharacter(form.lastName);
    if (!isLastname.status) {
      toast(isLastname.message)
      return isLastname.status
    }
    const isEmail = checkEmail(form.email);
    if (!isEmail.status) {
      toast(isEmail.message)
      return isEmail.status;
    }
    const isPinCode = checkPinCode(form.pinCode);
    if (!isPinCode.status) {
      toast(isPinCode.message);
      return isPinCode.status;
    }
    const isMobile = checkMobile(form.mobile);
    if (!isMobile.status) {
      toast(isMobile.message);
      return isMobile.status;
    }
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log(handleFormValidation(form));
    if (!handleFormValidation(form)) {
      return;
    } else {
      displayRazorpay(Total, form, navigate, dispatch);
    }
  };

  const backToCart = () => {
    navigate("/cart");
  };

  return (
    <Box width={"95%"} margin={"auto"}>
    
      <Flex
        gap={"5rem"}
        m={isLargerThan ? "3rem" : "1rem"}
        mt="5rem"
        flexDirection={isLargerThan ? "row" : "column-reverse"}
        w="90%"
      >
        {/* -----------------flex under box-------------- */}

        <Box width={["95%", "90%", "50%", "50%"]} m="auto" min-h="100vh">
          <form p="3rem" onSubmit={handleSubmit}>
            <Heading align={"left"} my={"5"}>
              Address<span style={{ color: "red" }}>*</span>
            </Heading>
            <HStack spacing={"10"} my={"5"}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name*"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                onChange={handleChange}
              />
            </HStack>
            <VStack spacing={"10"} my={"10"}>
              <Input
                type="text"
                name="addressLine1"
                placeholder="Address Line 1*"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="addressLine2"
                placeholder="Address Line 2"
                onChange={handleChange}
              />
            </VStack>
            <HStack spacing={"10"} my={"8"}>
              <Input
                type="text"
                name="locality"
                placeholder="Town/City*"
                onChange={handleChange}
              />
              <Input
                type="number"
                name="pinCode"
                placeholder="Pin Code*"
                onChange={handleChange}
              />
            </HStack>
            <HStack spacing={"10"} my={"5"}>
              <Input
                type="text"
                name="state"
                placeholder="State/Territory*"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="country"
                placeholder="Country*"
                onChange={handleChange}
              />
            </HStack>
            <Divider />
            <Heading align={"left"} my={"5"}>
              Contact<span style={{ color: "red" }}>*</span>
            </Heading>
            <VStack spacing={"8"}>
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                onChange={handleChange}
              />
              <Input
                type="number"
                name="mobile"
                placeholder="Mobile*"
                onChange={handleChange}
              />
            </VStack>
            <Button
              mt="2rem"
              width={["95%", "90%", "80%", "80%"]}
              my={"4"}
              bg={"rgb(84,98,111)"}
              color="white"
              p="1.5rem 2rem"
              border={"3px solid beige"}
              _hover={{
                background: "black",
                color: "white",
              }}
              type="submit"
            >
              PLACE ORDER
            </Button>
          </form>
        </Box>
        {/* --------------Flex upper-----box-------------  */}

        <Box width={["100%", "95%", "40%", "40%"]} m="auto" min-h="100vh">
          <Stack>
            <Button
              border={"3px solid beige"}
              bg={"rgb(84,98,111)"}
              color={"white"}
              fontWeight={"bold"}
              colorScheme={"none"}
              p="1.5rem"
              _hover={{
                bg: "black",
                color: "white",
              }}
              onClick={backToCart}
            >
              Back To Cart
            </Button>
          </Stack>

          <Stack spacing={5} my={"7"} border="3px solid beige">
            <Heading size={"md"} align={"left"} mx={"2"}>
              ORDER SUMMARY
            </Heading>
            <Flex lineHeight={"10"}>
              <Box align={"left"} mx={"1"} my={"4"}>
                <Text>ORIGINAL PRICE</Text>
                <Text> ITEMS</Text>
                <Text>QUANTITY</Text>
                <Text>DISCOUNT</Text>
                <Text>DELIVERY</Text>
                <Text>TOTAL</Text>
                <Badge fontSize={"0.65rem"} colorScheme="red">
                  ( inclusive to all taxes )
                </Badge>
              </Box>
              <Box mx={"2"} my={"4"}>
                <Text as="s" color="grey">
                  ₹ {Total}.00
                </Text>
                <Text>₹ {Total}.00</Text>
                <Text>{cartLength}</Text>
                <Text>₹ 00.00</Text>
                <Text>FREE</Text>
                <Text>₹ {Total}.00</Text>
              </Box>
            </Flex>
          </Stack>
          <Stack my={"2"}>coupon</Stack>
        </Box>
      </Flex>
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

export default Checkout;
