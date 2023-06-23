import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Box >
        <Navbar/>
        <Homepage />
    </Box>
  );
}

export default App;
