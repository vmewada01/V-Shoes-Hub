import { Badge, Box, Button, Divider, Flex, HStack, Heading, Input, Stack, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
 
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");
    const data = useSelector((store)=> store.cart_reducer.cart)
    //console.log(data)
    const navigate = useNavigate()

    const Total = data.reduce((acc,curr)=> acc+(curr.price * curr.qty),0)
    const cartLength = data.reduce((acc,curr)=> acc+ (curr.qty),0)
    //  console.log(Total)
    //  console.log(cartLength)

     const backToCart=()=> {
        navigate("/cart")
     }
 
    return (
    <Box width={'95%'} margin={'auto'} >
    <Flex
        m={"1rem"}
        mt="5rem"
        flexDirection={isLargerThan ? "row": "column-reverse"}
        w="90%"
      >


        {/* -----------------flex under box-------------- */}
        <Box w="100%" m="auto">
      <Stack>
        <Button
          border={"3px solid beige"}
          bg={"black"}
          color={"white"}
          fontWeight={"bold"}
          colorScheme={"none"}
          p="1.5rem"
          _hover={{ bg: "none", color: "teal" }}
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
          <Box align={"left"} mx={"2"} my={"4"}>
            <Text>ORIGINAL PRICE</Text>
            <Text> ITEMS</Text>
            <Text>QUANTITY</Text>
            <Text>DISCOUNT</Text>
            <Text>DELIVERY</Text>
            <Text>TOTAL</Text>
            <Badge colorScheme="red">( inclusive to all taxes )</Badge>
          </Box>
          <Box mx={"2"} my={"4"}>
            <Text as="s" color="grey">
              ₹ {Total} .00
            </Text>
            <Text>₹ {Total} .00</Text>
            <Text>{cartLength}</Text>
            <Text>₹ 00.00</Text>
            <Text>FREE</Text>
            <Text>₹ {Total}.00</Text>
          </Box>
        </Flex>
      </Stack>
      <Stack my={"2"}>coupon</Stack>
    </Box>


          {/* --------------Flex upper-----box-------------  */}
          <Box width={["95%", "90%", "50%", "50%"]}  m="auto" min-h="100vh">
        <form p="3rem" >
          <Heading align={"left"} my={"5"}>
            Address<span style={{ color: "red" }}>*</span>
          </Heading>
          <HStack spacing={"10"} my={"5"}>
            <Input
             
              type="text"
              name="firstName"
              placeholder="First Name*"
            />
            <Input
             
              type="text"
              name="lastName"
              placeholder="Last Name*"
            />
          </HStack>
          <VStack spacing={"10"} my={"10"}>
            <Input
             
              type="text"
              name="addressLine1"
              placeholder="Address Line 1*"
            />
            <Input
             
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
            />
          </VStack>
          <HStack spacing={"10"} my={"8"}>
            <Input
             
              type="text"
              name="locality"
              placeholder="Town/City*"
            />
            <Input
             
              type="number"
              name="pinCode"
              placeholder="Pin Code*"
            />
          </HStack>
          <HStack spacing={"10"} my={"5"}>
            <Input
             
              type="text"
              name="state"
              placeholder="State/Territory*"
            />
            <Input
             
              type="text"
              name="country"
              placeholder="Country*"
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
            />
            <Input
             
              type="number"
              name="mobile"
              placeholder="Mobile*"
            />
          </VStack>
          <Button
            mt="2rem"
            width={["95%", "90%", "80%", "80%"]}
            my={"4"}
            bg={isLargerThan ? "black":  "grey"}
            color="whitesmoke"
            p="1.5rem 2rem"
            border={"3px solid beige"}
            _hover={{
              background: "none",
              color: "teal",
              border: "1px solid black",
            }}
            type="submit"
          >
            PLACE ORDER
          </Button>
        </form>
      </Box>


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   </Flex>
    </Box>
  )
}

export default Checkout