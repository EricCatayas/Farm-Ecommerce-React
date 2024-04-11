import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { signInWithTokenStart } from './redux/user/user.actions';
import { fetchProductCategoriesStart } from "./redux/productCategory/productCategories.action";
import AboutUs from './routes/about-us';
import Authentication from './routes/authentication';
import Home from './routes/home';
import Navigation from './routes/navigation';
import ProductCreate from './components/products/product-create.component';
import ProductView from './routes/product-view';
import Registration from './routes/registration';

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
   }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='sign-up' element={<Registration/>} />        
        <Route path='sign-in' element={<Authentication/>} />       
        <Route path='about-us' element={<AboutUs/>} />       
        <Route path='product/create' element={<ProductCreate/>}/>
        <Route path='product/:id' element={<ProductView/>}/>
      </Route>
    </Routes>
  );
}

export default App;
