import './styles.css';
import React from 'react';

function Footer() {
  return(
    <>
    <nav>
      <ul className='footer'>
        <li className ="logo"><a href="http://www.facebook.com"><img src='https://cdn-icons-png.flaticon.com/512/20/20673.png'></img></a></li>
        <li className ="logo"><a href="http://www.instagram.com"><img src='https://imagensemoldes.com.br/wp-content/uploads/2020/07/Logo-do-Instagram-PNG-1280x720.png'></img></a></li>
        <li className ="logo"><a href=""><img src='https://static.vecteezy.com/system/resources/previews/002/534/047/original/social-media-whatsapp-black-logo-mobile-app-icon-free-free-vector.jpg'></img></a></li>
      </ul>  
    </nav>
    </>
  )
}

export default Footer;