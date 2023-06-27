import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Spinner,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



  export default function Login() {
    const dispatch = useDispatch()
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const loading = useSelector((store)=> store.AuthReducer.isloading)
    const error = useSelector((store)=> store.AuthReducer.isError)
    const auth = useSelector((store)=> store.AuthReducer.isAuth)
   // console.log(auth)
   const navigate= useNavigate()

 const handleLoginFunc=()=> {
    const payload= {
        email: email,
        password: password
    }
    dispatch(getLogin(payload))
    setEmail("")
    setPassword("")

    if(!auth){
        toast("Please Enter the Right Credentials.")
    }
  else  if(auth){
        navigate("/products")
       }
       else if(error){
        toast("Something went Wrong ..!!")
     }
    
 }

 
 



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
       
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>SIGN IN TO YOUR ACCOUNT</Heading>
           
          </Stack>
          <Box display={'flex'} justifyContent={'center'}>
          {loading && <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='white'
            color='blue.500'
            size='xl'
            />}
            </Box>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleLoginFunc}
                  bg={'black'}
                  color={'white'}
                  _hover={{
                    bg: 'white',
                    color: "black",
                    border: "1px solid black"
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                Don't have an account ? <span style={{color: "blue"}}><Link to='/login'>Signup</Link></span>
                </Text>
              </Stack>
          </Box>
        </Stack>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </Flex>
    );
  }