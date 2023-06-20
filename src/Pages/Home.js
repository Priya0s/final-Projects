import React from 'react'
import './Home.css'
import Header from '../Component/Header';
import Counter from '../Component/Counter';



const Home = () => {
  return (
    <>
   
    <Header />
     
    <div className='home_Banner'> 
     
    <div className='home_intro'>
<div className='home_intro_sub_content'>
<h3>Let Your Home Be unique</h3>
<p >There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages</p>
<button >Get Started
 </button>
</div>
      </div>
       <div className='home_banner'></div> 
    </div>
    
     <div className='work'>
        <div className='w1'>
          <div className='w1_content'>
        <p className='w1_content_para1'>Project Plan</p>
        <p className='w1_content_para2'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>   
          <button className='w1_button'>Read More
          <ion-icon name="arrow-forward-outline"></ion-icon></button>  
          </div>
        </div>
        <div className='w2'>
          <div className='w1_content'>
        <p className='w1_content_para1'>Interior Work</p>
        <p className='w1_content_para2'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>   
          <button className='w1_button'>Read More
          <ion-icon name="arrow-forward-outline"></ion-icon></button>  
          </div>
        </div>
        <div className='w3'>
          <div className='w1_content'>
        <p className='w1_content_para1'>Realization</p>
        <p className='w1_content_para2'>There are many variations of the passages of lorem Ipsum from 
available, majority.</p>   
          <button className='w1_button'>Read More
          <ion-icon name="arrow-forward-outline"></ion-icon></button>  
          </div>
        </div>
        </div> 
        <div className='About_us'>
        <div className='About_content'>
        <div className='About_subcontent'>
          <h4>We Create The Art Of Stylish Living</h4>
          <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
</div>
<div className='about_button'>
<div className='call'>
<img src="Call.png" alt='callIcon'/>
</div>
<button className='About_button'>Get Free Estimate
<ion-icon name="arrow-forward-outline"></ion-icon></button>
</div>

        </div>
        <div className='About_img'>
          <img src='Image.png' alt='aboutpic'/>
        </div>
      </div>
      <div className='Testionial'>
        <img src='Testimonial.jpg' alt='testimonilapic'/>
      </div>
      <div className='client_logo'>
        <img src='Client Logo.png' alt='clientpic'/>
      </div>
       <div className='home_Project'>
    <div className='home_Heading'>
<h4>Follow Our Projects</h4>
<p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>
      <div className='home_project'>
        <div className='home_sec1'>
          <div className='sec1_one'>
          <div className="card">
  <img className="card-img-top" src="Image (1).png" alt="imge "/>
  <div className="card-body">
  <h5 className="card-title">Modern Kitchan</h5>
    <p className="card-text">Decor / Artchitecture</p>
    
   <button>check In</button>
  </div>
</div>
<div className="card">
  <img className="card-img-top" src="photo(12).png" alt="imge "/>
  <div className="card-body">
  <h5 className="card-title">Modern Kitchan</h5>
    <p className="card-text">Decor / Artchitecture</p>
    
    <button>check In</button>
  </div>
</div>
          
          <div className="card">
  <img className="card-img-top" src="Photo (21).png" alt="imge "/>
  <div className="card-body">
  <h5 className="card-title">Modern Kitchan</h5>
  <p className="card-text">Decor / Artchitecture</p>
    
    <button>check In</button>
  </div>
</div>
<div className="card">
  <img className="card-img-top" src="Photo (22).png" alt="imge "/>
  <div className="card-body">
  <h5 className="card-title">Modern Kitchan</h5>
  <p className="card-text">Decor / Artchitecture</p>
    
    <button>check In</button>
  </div>
</div>
          </div>
        </div>
      </div>   
</div> 
{/* counter */}
 <div className='Counter_home'>
<Counter />
</div> 
<div className='home_news'>
  <div className='home_heading'>
    <h3>Articles & News</h3>
    <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
  </div>
  <div className='home_blog'>
  <div className="card">
  <img className="card-img-top" src="home_blog1.png" alt="imge "/>
  <div className="card-body">
  <p className="card-text">Let’s Get Solution For Building Construction Work</p>
    <h5 className="card-title">26 December,2022</h5>
    <button>check In</button>
  </div>
</div>
<div className="card">
  <img className="card-img-top" src="home_blog2.png" alt="imge "/>
  <div className="card-body">
  <p className="card-text">Let’s Get Solution For Building Construction Work</p>
    <h5 className="card-title">26 December,2022</h5>
    <button>check In</button>
  </div>
</div>
<div className="card">
  <img className="card-img-top" src="home_blog3.png" alt="imge "/>
  <div className="card-body">
   <p className="card-text">Let’s Get Solution For Building Construction Work</p>
    <h5 className="card-title">26 December,2022</h5>
    <button>check In</button>
  </div>
</div>
  </div>
</div>
<div className='home_contact'>
  <div className='home_contact_content'>
    <div className='home_contact_content_subtitle'>
<h2>Wanna join the interno?</h2>
<p>It is a long established fact  will be distracted.</p>
    </div>
    <div className='home_contact_content_button'>
<button>Contact With Us</button>
    </div>
  </div>
</div>
<div className='home_footer'>

  <div class="home_container">
    <div class="home_footer_row">
      <div class="home_col">
      
        <img src='footerlogo.png' alt='...'/>
       <h2>Interno</h2>
        <p className='home_para'>It is a long established fact that a reader will be distracted lookings.</p>

        <p className='home_para2'><ion-icon name="logo-facebook"></ion-icon><ion-icon name="logo-twitter"></ion-icon><ion-icon name="logo-linkedin"></ion-icon><ion-icon name="logo-instagram"></ion-icon></p>
      </div>
      <div class="home_col">
        <h4>Pages</h4>
        <ul>
          <li>About Us</li>
          <li>Our Projects</li>
          <li>Our Teams</li>
          <li>Contact Us</li>
          <li>Services</li>
        </ul>
      </div>
      <div class="home_col">
        <h4>Services</h4>
        <ul>
          <li>Kitchan</li>
          <li>Living Area</li>
          <li>Bathroom</li>
          <li>Dinning Hall</li>
          <li>Bedroom</li>
        </ul>
      </div>
      <div class="home_col">
        <h4>Contact</h4>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201 contact@interno.com
(123) 456 - 7890</p>
      </div>
    </div>
    <div className='home_copyright'>
       <p>Copyright © Interno | Designed by Priyanka Chauhan - Powered by skillNet</p> 
    </div>
  </div>

</div>

  


  
      
    </>
  )
}

export default Home;
