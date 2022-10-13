//import 'styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return(
    <>
    <div class='container'>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/register'>Register</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/products'>Products</Link>
      </div>
    </div>  
    </>
  )
}

export default Menu;