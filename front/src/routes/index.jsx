import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/menu';
import Footer from '../Components/footer';
import Home from '../Pages/home';
import Register from '../Pages/register';
import Login from '../Pages/login';
import Products from '../Pages/products';

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
      <Footer />
    </BrowserRouter>    
  )
}

export default Routes;