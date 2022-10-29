import './styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Menu() {
  return(
    <>
    <nav>
      <ul className='menu'>
        <li className="logo"><a href="#">WebCommerce</a></li>
        <li className='menu__item'>
          <Link to='/'>Home</Link>
        </li>

        <li className='item.button'>
          <Link to='/products'>Products</Link>
        </li>

        <li className='item.button'>
          <Link to='/register'>Sign Up</Link>
        </li>

        <li className='item.button'>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>  
    </nav>
    </>
  )
}

export default Menu;