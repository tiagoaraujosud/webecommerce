import '../App.css';
import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/Menu';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Products from '../Pages/Products';

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