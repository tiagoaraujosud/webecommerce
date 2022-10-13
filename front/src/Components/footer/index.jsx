import './styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return(
    <>
    <nav>
      <ul class='footer'>
        <li class="logo"><a href="#"><img src='img/facebook.png'></img>Facebook</a></li>
        <li class="logo"><a href="#">Instagram</a></li>
        <li class="logo"><a href="">Whatsapp</a></li>
      </ul>  
    </nav>
    </>
  )
}

export default Footer;