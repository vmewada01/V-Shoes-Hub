
import './App.css';
import Homepage from './pages/Homepage';
import { Box } from '@chakra-ui/react';

import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box className='scroll' >
        <AllRoutes />
    </Box>
  );
}

export default App;
