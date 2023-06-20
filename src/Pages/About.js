import React from 'react'
import './About.css'
import Header from '../Component/Header';

const About = () => {
  return (
    <>
    
    <Header />
    <div className='about_Banner'> 
     
    <div className='about_intro'>
<div className='about_intro_sub_content'>
<h3>About</h3>
<p className='about_para2'>Home/About</p>
 
</div>
      </div>
       <div className='About_banner'></div> 
    </div>
    <div className='about_us'>
    <div className='quotes'>
<img src='Quotes.png' alt='quote' />
    </div>
    <div className='what_we_do'>
<div className='content'>
<div className='what_we_do_subcontent'>
<h3>What we do</h3>
  <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
</div>
<button>OurConcepts</button>

</div>
<div className='content_pic'>
    <img  src='image.svg' alt='content_pic'/>
</div>
    </div>
    <div className='result'>
      {/* <div className='result_content'> */}
      <div className='result_content_pic'>
        <img src='resultPic.jpg' alt='..'/>
      </div>
       <div className='result_content_suncontent'>
        <h3>The End Result</h3>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>

       </div>
       <button>Our Portfolio 
       <ion-icon name="arrow-forward-outline"></ion-icon>
       </button>
      {/* </div> */}
    </div>
    <div className='about_Team'>
      <div className='about_team_content'>
       <div className='about_team_content_heading'>
<h3>What the People Thinks
 About Us</h3>
       </div>
       <div className='about_team_content_image'>
       <div className='about_team_content_image1'>
       <div className='image1'>
       <img src='aboutphoto (1).png' alt='...'/>
       </div>
        </div>
       <div className='about_team_content_image2'>
       <div className='image2'>
       <img src='aboutphoto (2).png' alt='...'/>
       </div>
       </div>
       <div className='about_team_content_image3'>
       <div className='image3'>
       <img src='about_3.png' alt='...'/>
       </div>
       </div>
       <div className='about_team_content_image4'>
       <div className='image4'>
       <img src='aboutphoto (4).png' alt='...'/>
       </div>
       </div>
       </div>

      </div>
    </div>
    <div className='about_mail_box'>
      <div className='about_mail_box_heading'>
<h3>Creative project? Let's have
a productive talk.</h3>
      </div>
      <div className='about_mail_box_form'>
<div className='about_mail_box_form_discription'>
  <div className='about_mail_box_form_name'>
  {/* <p className='name_line'></p> */}
    <p>Name</p>
  </div>
  <div className='about_mail_box_form_email'>
  <p className='email_line'></p>
    <p>Email</p>
  </div>
</div>
<div className='about_mail_box_form_subject'>
<p className='line'></p>
<p>Hello Iam Intrested in..</p>
</div>
      </div>
      
        <button>send Now</button>
     

    </div>
</div>
<div className='about_footer'>

<div class="about_container">
  <div class="about_footer_row">
    <div class="about_col">
    
      <img src='footerlogo.png' alt='...'/>
     <h2>Interno</h2>
      <p className='about_para'>It is a long established fact that a reader will be distracted lookings.</p>

      <p className='about_para2'><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon><ion-icon name="logo-linkedin"></ion-icon><ion-icon name="logo-instagram"></ion-icon></p>
    </div>
    <div class="about_col">
      <h4>Pages</h4>
      <ul>
        <li>About Us</li>
        <li>Our Projects</li>
        <li>Our Teams</li>
        <li>Contact Us</li>
        <li>Services</li>
      </ul>
    </div>
    <div class="about_col">
      <h4>Services</h4>
      <ul>
        <li>Kitchan</li>
        <li>Living Area</li>
        <li>Bathroom</li>
        <li>Dinning Hall</li>
        <li>Bedroom</li>
      </ul>
    </div>
    <div class="about_col">
      <h4>Contact</h4>
      <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
(123) 456 - 7890</p>
    </div>
  </div>
  <div className='about_copyright'>
     <p>Copyright © Interno | Designed by Priyanka Chauhan - Powered by skillNet</p> 
  </div>
</div>

</div>

    </>
  )
}

export default About;
