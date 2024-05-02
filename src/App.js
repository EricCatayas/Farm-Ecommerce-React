import './App.css';
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signInWithTokenStart } from './redux/user/user.actions';
import { addInfoNotification } from './redux/notification/notification.actions';
import { fetchProductCategoriesStart } from "./redux/productCategory/productCategories.action";
const AboutUs = React.lazy(() => import('./routes/about-us'));
const Authentication = React.lazy(() => import('./routes/authentication'));
const Home = React.lazy(() => import('./routes/home'));
const Navigation = React.lazy(() => import('./routes/navigation'));
const ProductCreate = React.lazy(() => import('./routes/product-create'));
const ProductView = React.lazy(() => import('./routes/product-view'));
const Registration = React.lazy(() => import('./routes/registration'));
const Store = React.lazy(() => import('./routes/store'));

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
     const authenticateUserOnLoad = async () => {
      try {
        dispatch(signInWithTokenStart());
      } catch(error) {
        console.log(error);
      }
     };
     const fetchProductCategoriesOnLoad = async() => {
      try{
        dispatch(fetchProductCategoriesStart());
      } catch(error){
        console.log(error);
      }
     }

     authenticateUserOnLoad();
     fetchProductCategoriesOnLoad();
     dispatch(addInfoNotification("This app is currently in development stage; many features are not yet available."))
   }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='sign-up' element={<Registration/>} />        
          <Route path='sign-in' element={<Authentication/>} />       
          <Route path='about-us' element={<AboutUs/>} />       
          <Route path='product/create' element={<ProductCreate/>}/>
          <Route path='product/:id' element={<ProductView/>}/>
          <Route path='store' element={<Store/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
