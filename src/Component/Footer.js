import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer_main'>
    <footer>
  <div class="container">
    <div class="footer_row">
      <div class="col">
      
        <img src='footerlogo.png' alt='...'/>
       <h2>Interno</h2>
        <p className='para'>It is a long established fact that a reader will be distracted lookings.</p>

        <p className='para2'><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon><ion-icon name="logo-linkedin"></ion-icon><ion-icon name="logo-instagram"></ion-icon></p>
      </div>
      <div class="col">
        <h4>Pages</h4>
        <ul>
          <li>About Us</li>
          <li>Our Projects</li>
          <li>Our Teams</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
      <div class="col">
        <h4>Servicse</h4>
        <ul>
          <li>Kitchan</li>
          <li>Living Area</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
      </div>
      <div class="col">
        <h4>Contact</h4>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
(123) 456 - 7890</p>
      </div>
    </div>
    <div className='copyright'>
       <p>Copyright © Interno | Designed by Priyanka Chauhan - Powered by skillNet</p> 
    </div>
  </div>
</footer>
</div>
    </>
  )
}

export default Footer;
