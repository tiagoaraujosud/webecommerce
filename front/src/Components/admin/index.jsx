import './styles.css';
import React from 'react';
import AddProducts from '../../Pages/products/addProducts';

import { Link } from 'react-router-dom';

function AdminMenu() {
  
  return(
    <>
    <nav>
      <ul className='menu'>
        
        <li className='menu__item'>
          <Link to='/add_products'>Add Products</Link>
        </li>

        <li className='item.button'>
          <Link to='/products'>Users</Link>
        </li>

      </ul>  
      <AddProducts />
    </nav>
    </>
  )
}

export default AdminMenu;