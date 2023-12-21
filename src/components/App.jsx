import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Contacts from 'pages/Contacts';
import Layout from './Layout/Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';
const App = () => {
  return (
    <ChakraProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Contacts />} />
            <Route path="*" element={<div>not....</div>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register/>}/>
        </Routes>
      </>
    </ChakraProvider>
  );
};
export default App;
