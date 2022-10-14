import './styles.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return(
    <>
    <nav>
      <ul class='footer'>
        <li class="logo"><a href="http://www.facebook.com"><img src='https://cdn-icons-png.flaticon.com/512/20/20673.png'></img></a></li>
        <li class="logo"><a href="http://www.instagram.com"><img src='https://imagensemoldes.com.br/wp-content/uploads/2020/07/Logo-do-Instagram-PNG-1280x720.png'></img></a></li>
        <li class="logo"><a href=""><img src='https://assets.stickpng.com/images/5a019b697ca233f48ba6275a.png'></img></a></li>
      </ul>  
    </nav>
    </>
  )
}

export default Footer;