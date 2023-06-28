import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkLoginForm } from "../checkout/CheckProperty";
import { color } from "framer-motion";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((store) => store.AuthReducer.isloading);
  const error = useSelector((store) => store.AuthReducer.isError);
  const auth = useSelector((store) => store.AuthReducer.isAuth);
   //console.log(auth)
  const navigate = useNavigate();
  const location = useLocation();
  const pathRoute = location.state?.from?.pathname || "/";
  //  console.log(pathRoute)
  //  console.log(location)
  const payload = {
    email: email,
    password: password,
  };
 //console.log(payload)
  let validation = checkLoginForm(payload);
  const handleLoginFunc = () => {
   
  
    if (!validation.status) {
      toast(validation.message);
    } 
   // console.log(validation)
    if(validation.status) {
     // console.log(auth)
      dispatch(getLogin(payload));
   
      if (auth) {
        navigate(pathRoute, { replace: true });
        setEmail("");
        setPassword("");
      } else if (!auth) {
        toast("Please Enter the Right Credentials.");
      } else if (error) {
        toast("Something went Wrong ..!!");
      }
    }
  };
  let mode =document.body.className


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack  align={"center"}>
          <Heading   fontSize={"4xl"}>SIGN IN TO YOUR ACCOUNT</Heading>
        </Stack>
        <Box display={"flex"} justifyContent={"center"}>
          {loading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="white"
              color="blue.500"
              size="xl"
            />
          )}
        </Box>
        <Box
          rounded={"lg"}
         
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="george.bluth@reqres.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLoginFunc}
                bg={"rgb(84,98,111)"}
                color={"white"}
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Don't have an account ?
              <Link to="https://reqres.in/" target="blank">
                {" "}
                <span style={{ color: "blue" }}>
                  Use Reqres Fake Api to login
                </span>
              </Link>
            </Text>
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
