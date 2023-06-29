import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import "./Homepage.css"
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <Box >
 
 <Box className="navbar-bottom-content">
      <Box>Hello Nike App</Box>
      <Box fontSize="10px">Download the app to access everything Nike .<Text as="u">Get Your Great</Text></Box>
      </Box>
   


       <Box className="navbar-bottom-image">
      <Image className='sprite'  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1903,c_limit/467ca0c5-304e-4431-adc1-a8d761c942cf/nike-just-do-it.jpg" alt="image" />
     </Box>
      <Box className='homepage-content'>
        <Box><Text fontSize="20px">Summer Essentials</Text></Box>
        <Box><Text fontSize="60px" fontWeight='extrabold' >CHASE THE DAY</Text></Box>
        <Box><Text fontSize="18px">Move.Explore.Bring your boldest.</Text></Box>
        <Box><Text fontSize='18px'>Get after summer's endless possibilities with ready-for-anything fits.</Text></Box>
        <Box marginTop='1.5rem'> <Link to="/products"> <Button backgroundColor="black" borderRadius="1.5rem" color="white">Shop </Button> </Link></Box>
      </Box>

    <Box className='featured'><Text fontSize='30px'>Featured</Text></Box>
 
    <Box className='featured-image'>
    
    <Box className='featured-image-text'><Text fontSize="60px" color='white' fontWeight='extrabold' >ALWAYS ICONIC</Text></Box> 
    <Box className='featured-image-button'> <Link to="/products"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button> </Link></Box>
    <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0f3b3f02-75b2-4d2e-912d-b6e7d94527bb/nike-just-do-it.png' />
    </Box>

      <Box className='single-image' marginBottom='1rem'><Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/53a167b2-a256-4a3d-bfb3-84662ce163b3/nike-just-do-it.png' /></Box>
      <Box className='featured'><Text fontSize='30px'>Trending</Text></Box>
   
   
      <Box className='trending'>

       <Box className='trending-image-1'>
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Nike Dunk Low</Text></Box> 
       <Box className='featured-image-button'> <Link to="/products"> <Button   position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Get It First </Button> </Link></Box>
        <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/f0f6ea6a-454f-4905-abc8-03f1e188c282/nike-just-do-it.jpg' alt='image-trending' />
        
        </Box>


       <Box className='trending-image-1'> 
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Stylin' Up with Wasu </Text></Box> 
       <Box className='featured-image-button'> <Link to="/products"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Read Now </Button> </Link></Box>
        <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/1998ada5-6caf-4819-ae0a-f03393afa04a/nike-just-do-it.png' alt='image-trending' />
        </Box>

        

      </Box>
   

      <Box className='featured'><Text fontSize='30px'>Gear Up</Text></Box>
   
   
      <Box className='trending'>

       <Box className='trending-image-1'>
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Fits to a Tee</Text></Box> 
       <Box className='featured-image-button'> <Link to="/men"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop</Button> </Link></Box>
        <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_966,c_limit/44431b2f-fe82-4035-a19c-0e9999ac5a13/men-s-shoes-clothing-accessories.png' alt='image-trending' />
        
        </Box>

        
       <Box className='trending-image-1'> 
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Ace Your Look</Text></Box> 
       <Box className='featured-image-button'> <Link to="/men"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button> </Link></Box>
        <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_966,c_limit/19e18a36-8683-4a8b-aae0-4c7b0e7ec48f/men-s-shoes-clothing-accessories.png' alt='shoes image' />
        </Box>

        

      </Box>
   
      <Box className='featured'><Text fontSize='30px'>The Essentials</Text></Box>
   
   
   <Box className='trending'>

    <Box className='trending-image-1'>
    
    <Box className='featured-image-button'> <Link to="/men"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop</Button> </Link></Box>
     <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/8ee82ea2-80c2-41d7-9c06-e0d1e0ca00b0/nike-by-you-custom-shoes.png' alt='image-trending' />
     
     </Box>

     
    <Box className='trending-image-1'> 
    
    <Box className='featured-image-button'><Link to="/women"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button> </Link></Box>
     <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_593,c_limit/b162541d-52ed-449a-892b-6e6c09f70804/nike-by-you-custom-shoes.png' />
     </Box>

     <Box className='trending-image-1'> 
    
    <Box className='featured-image-button'><Link to="/kids"> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg'  color="black">Shop </Button> </Link></Box>
     <Image className='img' src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_593,c_limit/b649423a-0ece-4643-92a8-f1026d663868/nike-by-you-custom-shoes.png' />
     </Box>

     

   </Box>
   
   
   
    </Box>
  )
}

export default Homepage