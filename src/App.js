import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './routes/home';
import Navigation from './routes/navigation';
import Registration from './routes/registration';
import Authentication from './routes/authentication';
import ProductCreate from './components/products/product-create.component';
import ProductView from './routes/product-view';

const App = () => {

   const dispatch = useDispatch();

   useEffect(() => {
    
     const authenticateUserOnLoad = async () => {
       const accessToken = getAuthorizationToken();
       const refreshToken = getRefreshToken();

       if (accessToken && refreshToken) {
         // Send request to authenticate user using tokens
         try {
           const userData = await dispatch(
             authenticateUser(accessToken, refreshToken)
           );
           // Set user authentication state in Redux or React Context
           console.log("User authenticated:", userData);
         } catch (error) {
           console.error("Error authenticating user:", error);
         }
       }
     };

     authenticateUserOnLoad();
   }, []);

  // TODO: deal with package vulnerabilities
  // 

  
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='sign-up' element={<Registration />} />        
        <Route path='sign-in' element={<Authentication />} />       
        <Route path='product/create' element={<ProductCreate />}/>
        <Route path='product/:id' element={<ProductView/>}/>
      </Route>
    </Routes>
  );
  
}

export default App;
