import React from 'react'
import Header from '../Component/Header';
import './Contactpage.css'

const ContactPage = () => {
  return (
    <>
     
        <Header />
        <div className='contact_Banner'> 
     
     <div className='contact_intro'>
 <div className='contact_intro_sub_content'>
 <h3>Contact</h3>
 <p className='contact_para2'>Home/Contact</p>
  
 </div>
       </div>
        <div className='contact_Banner_img'></div> 
     </div>
        
        <div className='Form'>
          <p>We love meeting new people and helping them.

</p>
       <div className='Contact_form'>
        <div className='Details'>
<div className='Details_content'>
  <div className='Details_content_subcontent'>
   <div className='mail' >
    <div className='icon'>
      <img src='mail_pic.svg' alt='...'/>
      <p>info@yourdomain.com</p>
    </div>
   </div>
   <div className='phone' >
   <div className='icon'>
      <img src='mail_pic.png' alt='...'/>
      <p>+1 (378) 400-1234
</p>
    </div>
   </div>
   <div className='address' >
   <div className='icon'>
      <img src='address_pic.svg' alt='...'/>
      <p>www.yourdomain.com</p>
    </div>
   </div>
  </div>
  <div className='social_icon'>
    <p><ion-icon name="logo-facebook"></ion-icon></p>
    <p><ion-icon name="logo-twitter"></ion-icon></p>
    <p><ion-icon name="logo-linkedin"></ion-icon></p>
    <p><ion-icon name="logo-instagram"></ion-icon></p>
  </div>
</div>
        </div>
        <div className='Contact_form_Form'>
<div className='Contact_form_Form_content'>
  <div className='Contact_form_Form_sec1'>
    <div className='Name'>
      <p>Name</p>
    </div>
    <div className='Email'>
      <p>Email</p>
    </div>
  </div>
  <div className='Contact_form_Form_sec2'>
   <div className='Subject'>
<p>Subject</p>
   </div>
   <div className='Phone'>
   <p>Phone</p>
   </div>
   {/* <div className='message'>
   <p>Hello Iam Intrested in..</p>
   </div> */}
   </div>
  
   <div className='button'>
  <button>Send Now</button>
</div>
  
</div>


        </div>
       </div>
        </div>
        <div className='map'>
          <p><ion-icon name="navigate-outline"></ion-icon></p>
         <img src='map.png' alt='...'/> 
        </div>
        <div className='contactpage_footer'>

<div class="contactpage_container">
  <div class="contactpage_footer_row">
    <div class="contactpage_col">
    
      <img src='footerlogo.png' alt='...'/>
     <h2>Interno</h2>
      <p className='contactpage_para'>It is a long established fact that a reader will be distracted lookings.</p>

      <p className='contactpage_para2'><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon><ion-icon name="logo-linkedin"></ion-icon><ion-icon name="logo-instagram"></ion-icon></p>
    </div>
    <div class="contactpage_col">
      <h4>Pages</h4>
      <ul>
        <li>About Us</li>
        <li>Our Projects</li>
        <li>Our Teams</li>
        <li>Contact Us</li>
        <li>Services</li>
      </ul>
    </div>
    <div class="contactpage_col">
      <h4>Services</h4>
      <ul>
        <li>Kitchan</li>
        <li>Living Area</li>
        <li>Bathroom</li>
        <li>Dinning Hall</li>
        <li>Bedroom</li>
      </ul>
    </div>
    <div class="contactpage_col">
      <h4>Contact</h4>
      <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
(123) 456 - 7890</p>
    </div>
  </div>
  <div className='contactpage_copyright'>
     <p>Copyright © Interno | Designed by Priyanka Chauhan - Powered by skillNet</p> 
  </div>
</div>

</div>
    </>
  )
}

export default ContactPage;
