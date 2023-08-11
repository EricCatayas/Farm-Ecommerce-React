import './App.css';
import { Component } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './routes/home';
import Navigation from './routes/navigation';
import Registration from './routes/registration';

class App extends Component {
  constructor(){
    super();    
  }
  componentDidMount(){
    //fetch call
  }
  render(){

    return (
      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='sign-up' element={<Registration />} />        
        </Route>
      </Routes>
    );
  }
}

export default App;
