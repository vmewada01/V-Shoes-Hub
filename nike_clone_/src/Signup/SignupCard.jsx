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
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link} from "react-router-dom"
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  




  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
     
     const intial={
      name:'',
      lastname: '',
      email: '',
      password: ''
     }
     const [formdata,setFormData] = useState(intial)

     const [name, setName]= useState("")
     const [lastname, setLastName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword]= useState("")
     const [authData, setAuthData] = useState([])

    const handleSignup=()=> {
      const payload= {
        name: name,
        lastname: lastname,
        email: email,
        password: password
      }
      setAuthData([...authData, payload])
      setEmail("")
      setLastName("")
      setPassword("")
      setName("")
      toast("Please Login to your account")
    }
    //console.log(authData)
     
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value) } />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name='lastname' value={lastname} onChange={(e)=>setLastName(e.target.value) }   />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value) } />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(e)=>setPassword(e.target.value) } />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                 onClick={handleSignup}
                  loadingText="Submitting"
                  size="lg"
                  bg={'black'}
                  color={'white'}
                  _hover={{
                    bg: 'white',
                    color: "black",
                    border: '1px solid black'
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                Already a user? <span style={{color: "blue"}}><Link to='/login'>Login</Link></span>
                </Text>
              </Stack>
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