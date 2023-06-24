import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import "../pages/Homepage.css"


const Homepage = () => {
  return (
    <Box >
 
 <Box className="navbar-bottom-content">
      <Box>Hello Nike App</Box>
      <Box fontSize="10px">Download the app to access everything Nike .<Text as="u">Get Your Great</Text></Box>
      </Box>
   


       <Box className="navbar-bottom-image">
      <Image src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1903,c_limit/467ca0c5-304e-4431-adc1-a8d761c942cf/nike-just-do-it.jpg" alt="image" />
     </Box>
      <Box className='homepage-content'>
        <Box><Text fontSize="20px">Summer Essentials</Text></Box>
        <Box><Text fontSize="60px" fontWeight='extrabold' >CHASE THE DAY</Text></Box>
        <Box><Text fontSize="18px">Move.Explore.Bring your boldest.</Text></Box>
        <Box><Text fontSize='18px'>Get after summer's endless possibilities with ready-for-anything fits.</Text></Box>
        <Box marginTop='1.5rem'><Button backgroundColor="black" borderRadius="1.5rem" color="white">Shop </Button></Box>
      </Box>

    <Box className='featured'><Text fontSize='30px'>Featured</Text></Box>
 
    <Box className='featured-image'>
    <Box className='featured-image-text'><Text fontSize="60px" color='white' fontWeight='extrabold' >ALWAYS ICONIC</Text></Box> 
   <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button></Box>
      <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0f3b3f02-75b2-4d2e-912d-b6e7d94527bb/nike-just-do-it.png' />
      </Box>

      <Box marginBottom='1rem'><Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/53a167b2-a256-4a3d-bfb3-84662ce163b3/nike-just-do-it.png' /></Box>
      <Box className='featured'><Text fontSize='30px'>Trending</Text></Box>
   
   
      <Box className='trending'>

       <Box className='trending-image-1'>
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Nike Dunk Low</Text></Box> 
       <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Get It First </Button></Box>
        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/f0f6ea6a-454f-4905-abc8-03f1e188c282/nike-just-do-it.jpg' alt='image-trending' />
        
        </Box>


       <Box className='trending-image-1'> 
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Stylin' Up with Wasu </Text></Box> 
       <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Read Now </Button></Box>
        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/1998ada5-6caf-4819-ae0a-f03393afa04a/nike-just-do-it.png' alt='image-trending' />
        </Box>

        

      </Box>
   

      <Box className='featured'><Text fontSize='30px'>Gear Up</Text></Box>
   
   
      <Box className='trending'>

       <Box className='trending-image-1'>
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Fits to a Tee</Text></Box> 
       <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop</Button></Box>
        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/c1bb62a8-28b1-4415-bca4-b15066816839/nike-just-do-it.jpg' alt='image-trending' />
        
        </Box>

        
       <Box className='trending-image-1'> 
       <Box className='featured-image-text'><Text fontSize='40px'  color='white'  >Ace Your Look</Text></Box> 
       <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button></Box>
        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/7639bac5-4fa2-4438-9af0-3ceda5900f21/nike-just-do-it.jpg' />
        </Box>

        

      </Box>
   
      <Box className='featured'><Text fontSize='30px'>The Essentials</Text></Box>
   
   
   <Box className='trending'>

    <Box className='trending-image-1'>
    
    <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop</Button></Box>
     <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/69ded6b2-4b32-4f76-9dd0-2d5235a04953/nike-just-do-it.png' alt='image-trending' />
     
     </Box>

     
    <Box className='trending-image-1'> 
    
    <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button></Box>
     <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/1c8b3b45-5c46-418e-8c62-37fc65eca37c/nike-just-do-it.png' />
     </Box>

     <Box className='trending-image-1'> 
    
    <Box className='featured-image-button'> <Button  position='absolute' top='70%' left='10%' backgroundColor="white" borderRadius="1.5rem" size='lg' color="black">Shop </Button></Box>
     <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/70a7b831-bc34-4273-9790-6775c56667c0/nike-just-do-it.png' />
     </Box>

     

   </Box>
   
   
   
    </Box>
  )
}

export default Homepage