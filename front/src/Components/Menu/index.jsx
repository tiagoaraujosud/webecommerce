import './styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return(
    <>
    <nav>
      <ul class='menu'>
        <li class="logo"><a href="#">WebCommerce</a></li>
        <li class='menu__item'>
          <Link to='/'>Home</Link>
        </li>

        <li class='menu__item'>
          <Link to='/products'>Products</Link>
        </li>

        <li class='item button secondary'>
          <Link to='/register'>Sign Up</Link>
        </li>

        <li class='item.button'>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>  
    </nav>
    </>
  )
}

export default Menu;