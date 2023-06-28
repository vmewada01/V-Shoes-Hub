import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decreaseQuantity, increaseQuantity, removeQuantity } from '../Redux/AppReducer/Cart/action'
import Checkout from '../checkout/Checkout'

const Cart = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const cartitem= useSelector((store)=> store.cart_reducer.cart)
      //console.log(cartitem)


      const Total = cartitem.reduce((acc,curr)=> acc+(curr.price * curr.qty),0)
      const cartLength = cartitem.reduce((acc,curr)=> acc+ (curr.qty),0)
      // console.log(Total)
      const handleIncrease =(id,qty)=> {
       // console.log("hi")
         dispatch(increaseQuantity({id,qty}))
      }
     const handelDecrease=(id,qty)=> {
      
        dispatch(decreaseQuantity({id,qty}))
     }

      const handleRemoveFromCart=(id)=> {
         dispatch(removeQuantity({id}))
      }

      const handleRedirectToAllProducts=()=> {
        navigate("/products")
      }

  return (
    <Box w={"100%"}  m={"auto"}>

    {
       cartLength > 0  ? 
    <Flex w={{base:"100%", sm:"100%", md:"90%", lg:"80%"}} m={"auto"} gap={"10px"} pt={"20px"} direction={{base:"column", sm:"column", md: "column", lg:"row"}}>
          <Box w={{base:"80%", sm:"80%", md:"80%", lg:"65%"}}  textAlign={"left"} pl={"10px"} m={{base: "auto", sm:"auto", md:"auto", lg:"px"}}>
              <Box  mb={"20px"} p="5px">
                  <Text border={"1px solid #f1f3f6"} fontWeight={"600"} pl={"20px"}>Your Cart ({cartLength})</Text>
              </Box>
             
              <Box >
                    {  cartLength > 0 &&
                        cartitem.map((elem)=>(
                        <Box key={elem.id}  mb={"8px"} border={"1px solid #f1f3f6"} p={"10px"}  >
                          <Flex direction={{base: "column", sm:"row"}} alignItems={"center"}> 
                              <Box w={"100px"} m={{base:"auto", sm:"px", md:"px"}} >
                                <Image objectFit={"cover"}  src={elem.imageSrc} alt={"cartPic"}/>
                              </Box>
                              <Box  pl={"15px"} textAlign={"left"}>
                                  <Text fontWeight={"480"} fontSize={"13.5px"}>{elem.title}</Text>
                                  <Text fontWeight={"550"} fontSize={"14px"} color={"#969491"}>{elem.category}</Text>
                                  <Text fontWeight={"550"} fontSize={"14px"}>{elem.brand}</Text>
                                  <Text fontWeight={"650"} fontSize={"16px"}>₹ {elem.price}</Text>
                                  
                                  <Flex alignItems={"center"} gap={"5px"}>
                                      <Text fontWeight={"480"} fontSize={"13.5px"}>Quantity:</Text>
                                      <Button bg='rgb(84,98,111)' color='white'  size={"xs"} fontWeight={"700"} _hover={{bg:"black",color:"white"}} fontSize={"13.5px"} isDisabled={elem.qty === 1} onClick={()=>handelDecrease(elem.id,elem.qty)}>-</Button>
                                         <Text fontWeight={"480"} fontSize={"13.5px"} pl={"5px"} pr={"5px"}>{elem.qty}</Text>
                                      <Button bg='rgb(84,98,111)' color='white' _hover={{bg:"black",color:"white"}} size={"xs"} fontWeight={"700"}  fontSize={"13.5px"} onClick={()=>handleIncrease(elem.id,elem.qty)}>+</Button>
                                  </Flex>
                              </Box>
                          </Flex>
                          <Flex mt={"5px"} alignItems={"center"} gap={"2px"} border={"1px solid #f1f3f6"}>
                                <Box w={"50%"} >
                                    <Button bg={"rgb(84,98,111)"} _hover={{bg:"black",color:"white"}} fontSize={"12px"} variant={"unstyled"} w={"100%"} onClick={()=>handleRemoveFromCart(elem.id)}>Remove</Button>
                                </Box>
                                <Box w={"50%"}>
                                    <Button fontSize={"12px"} variant={"unstyled"} w={"100%"}>Add to Wishlist</Button>
                                </Box>
                          </Flex>
                        </Box>
                        ))
                    }
              </Box> 
          </Box>
          <Box  border={"1px solid #f1f3f6"}  w={{base:"80%", sm:"80%", md:"80%", lg:"35%"}} m={{base: "auto", sm:"auto", md:"auto", lg:"px"}} textAlign={"left"} pl={"10px"}>
              <Box  mb={"20px"} p="5px" textAlign={"left"} pl={"20px"}>
                  <Text fontWeight={"600"}>Order Summery</Text>
              </Box>
              <Box >
                   <Flex justifyContent={"space-between"} pt={"20px"} mb={"40px"} pl={"20px"} pr={"20px"} alignItems={"center"}>
                         <Text fontSize={"14px"} fontWeight={"600"}>Price ({cartitem.length} Items.)</Text>
                         <Text fontSize={"14px"} fontWeight={"600"}>₹ {Total}</Text>
                   </Flex>
                   <Flex justifyContent={"space-between"} mt={"10px"} mb={"40px"} pl={"20px"} pr={"20px"} alignItems={"center"}>
                         <Text fontSize={"14px"} fontWeight={"600"}>Discount</Text>
                         <Text fontSize={"14px"} fontWeight={"600"}>0.00</Text>
                   </Flex>
                   <Flex justifyContent={"space-between"} mt={"10px"} mb={"40px"} pl={"20px"} pr={"20px"} alignItems={"center"}>
                         <Text fontSize={"14px"} fontWeight={"600"}>Delivery Charges</Text>
                         <Text fontSize={"14px"} fontWeight={"600"} color={"green.400"}>Free</Text>
                   </Flex>
                   <Flex justifyContent={"space-between"} pb={"20px"} mt={"10px"} mb={"40px"} pl={"20px"} pr={"20px"} alignItems={"center"}>
                         <Text fontSize={"17px"} fontWeight={"640"}>Total Amount</Text>
                         <Text fontSize={"17px"} fontWeight={"640"}>₹ {Total}</Text>
                   </Flex>
              </Box>
              <Box m={{base: "auto", sm:"auto", md:"auto", lg:"px"}}>
                        <Link to="/checkout">
                         <Button 
                          
                            w={"100%"} 
                            bg={"rgb(84,98,111)"}
                            color={"white"}
                            borderRadius={"0"}
                            _hover={{bg:"black", color:"white"}}
                           
                            >
                                Proceed to Checkout
                            </Button>
                            </Link>
                  
              </Box>
          </Box>
          
    </Flex> : 
            <Box textAlign={"center"} w={{base:"100%", sm:"100%", md:"30%", lg:"30%"}} m={"auto"} pt={"20px"}>
                   <Image  display={"block"} src={"https://nexispro.com/wp-content/uploads/2020/09/empty-cart.jpg"} alt={"emptyCart"} mb={"10px"}/>
                   <Button bg={"#3470e4 "} onClick={handleRedirectToAllProducts} mb={"10px"} variant={"outline"} borderRadius={"0px"} color={"white"} _hover={{color:"black", bg:"white"}}>
                          Shop Now
                   </Button>
            </Box>
     }
</Box>
  )
}

export default Cart