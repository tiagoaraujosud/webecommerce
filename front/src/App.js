import './App.css';
import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />

        <Route path="/cadastro" element={<Page2 />} />
        
        <Route path="/login" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
