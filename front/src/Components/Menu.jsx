import '../App.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </>
  )
}

export default Menu;