import '../App.css';
import React from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';


const Menu = () => {
    return(
        <Router>
            <div>

                <Link to='/'>Home</Link>
                <Link to='/cadastro'>Register</Link>
                <Link to='/login'>Login</Link>

                <Routes>

                    <Route path="/" exact element={<Page1 />} />

                    <Route path="/cadastro" element={<Page2 />} />

                    <Route path="/login" element={<Page3 />} />

                </Routes>
            </div>
        </Router>    

    )

}

export default Menu;