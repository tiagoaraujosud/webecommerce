import '../App.css';
import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/Menu/Menu';
import Home from '../Pages/home/Home';
import Register from '../Pages/register/Register';
import Login from '../Pages/login/Login';
import Products from '../Pages/products/Products';

const Routes = () => {
  return(
    <BrowserRouter>
			<Menu />
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Switch>
    </BrowserRouter>    
  )
}

export default Routes;