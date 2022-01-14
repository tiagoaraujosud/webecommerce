import '../App.css';
import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/Menu';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Page3 from '../Pages/Page3';

const Routes = () => {
  return(
    <BrowserRouter>
			<Menu />
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Page3 />} />
      </Switch>
    </BrowserRouter>    
  )
}

export default Routes;