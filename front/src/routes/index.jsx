import '../App.css';
import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const Routes = () => {
  return(
    <BrowserRouter>
			<Menu />
      <Switch>
        <Route path="/" exact element={<Page1 />} />
        <Route path="/cadastro" element={<Page2 />} />
        <Route path="/login" element={<Page3 />} />
      </Switch>
    </BrowserRouter>    
  )
}

export default Routes;