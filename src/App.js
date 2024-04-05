import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { signInWithTokenStart } from './redux/user/user.actions';
import { fetchProductCategoriesStart } from "../../redux/productCategory/productCategories.action";
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
      try {
        dispatch(signInWithTokenStart());
      } catch(error) {
        console.log(error);
      }
     };
     const fetchCategoriesOnLoad = async() => {
      try{
        dispatch(fetchProductCategoriesStart());
      } catch(error){
        console.log(error);
      }
     }

     authenticateUserOnLoad();
     fetchCategoriesOnLoad();
   }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='sign-up' element={<Registration/>} />        
        <Route path='sign-in' element={<Authentication/>} />       
        <Route path='product/create' element={<ProductCreate/>}/>
        <Route path='product/:id' element={<ProductView/>}/>
      </Route>
    </Routes>
  );
}

export default App;
