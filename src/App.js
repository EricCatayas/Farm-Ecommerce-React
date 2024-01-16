import './App.css';
import { Component } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './routes/home';
import Navigation from './routes/navigation';
import Registration from './routes/registration';
import Authentication from './routes/authentication';
import ProductCreate from './components/products/product-create.component';
import ProductView from './routes/product-view';

class App extends Component {
  constructor(){
    super();    
  }
  componentDidMount(){
    //fetch call
  }
  // TODO: 
  //      Factory (to remove new keywords)
  render(){
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
}

export default App;
