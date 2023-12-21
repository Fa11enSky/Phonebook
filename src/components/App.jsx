import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'store/auth/selectors';
import { refreshUser } from 'store/auth/operations';
import Loader from './Loader/Loader';
const Layout =lazy(()=>import('./Layout/Layout')) 
const Register =lazy(()=>import('../pages/Register'))
const Login =lazy(()=>import('../pages/Login'))
const Contacts = lazy(()=>import('../pages/Contacts'))
const App = () => {
  const isRefreshing= useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(refreshUser())
},[dispatch])
  return isRefreshing?<Loader/>: (
    <ChakraProvider>
      <>
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Contacts />} />
              <Route path="*" element={<div>not....</div>} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register/>}/>
          </Routes>
        </Suspense>
      </>
    </ChakraProvider>
  );
};
export default App;
