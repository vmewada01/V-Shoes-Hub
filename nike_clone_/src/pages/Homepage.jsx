import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import "../pages/Homepage.css"


const Homepage = () => {
  return (
    <Box>
       <Box className="navbar-bottom-image">
      <Image src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1903,c_limit/467ca0c5-304e-4431-adc1-a8d761c942cf/nike-just-do-it.jpg" alt="image" />
     </Box>
      <Box className='homepage-content'>
        <Box><Text fontSize="20px">Summer Essentials</Text></Box>
        <Box><Text fontSize="60px" fontWeight='extrabold' >CHASE THE DAY</Text></Box>
        <Box><Text fontSize="18px">Move.Explore.Bring your boldest.</Text></Box>
        <Box><Text fontSize='18px'>Get after summer's endless possibilities with ready-for-anything fits.</Text></Box>
        <Box marginTop='1.5rem'><Button backgroundColor="black" color="white">Shop </Button></Box>
      </Box>
    </Box>
  )
}

export default Homepage