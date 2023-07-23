import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getRegister } from "../Redux/AuthReducer/action";
import {checkSignupForm}  from "../checkout/CheckProperty"
import { GET_REGISTER_SUCCESS } from "../Redux/AuthReducer/actionType";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const intial = {
    name: "",
    email: "",
    password: "",
  };
  const [formdata, setFormData] = useState(intial);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  const handleSignup = () => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    let validation = checkSignupForm(payload);
 if(!validation.status){
  toast(validation.message);
 }else if(validation.status){
  dispatch(getRegister(payload)).then((r)=> {
   if(r.status===GET_REGISTER_SUCCESS){
    navigate("/login")
   }else  {
    toast(r.message)
   }
  
  })
 }
 
  };
  //console.log(authData);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={()=>handleSignup()}
                loadingText="Submitting"
                size="lg"
                bg={"rgb(84,98,111)"}
                color={"white"}
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <span style={{ color: "blue" }}>
                  <Link to="/login">Login</Link>
                </span>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
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
    </Flex>
  );
}
