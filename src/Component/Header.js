import React from 'react'

import { Link } from "react-router-dom";
import './Header.css'
const Header= () => {
  return (
    <>
   
    <div className='Header'>
      <div className='logo'>
        <div className='logo_sec'>
          <img src='logo1.png' alt='..'/>
        </div>
        <p>Interno</p>
      </div>
      <div className='menubar'>
        <div className='menu'>
        <ul>
          <li>  <Link className='lst' to="/">Home</Link>
          </li>
          <li>   <Link className='lst' to="/About">About</Link> </li>
          <li>  <Link className='lst' to="/Services"> Services</Link>
           </li>
          <li><Link className='lst' to="/Project "> Project</Link>
            </li>
         <li><Link className='lst' to="/Blog "> Blog</Link>
         </li> 
         <li><Link className='lst' to="/Contact "> Contact </Link>
           </li> 
          </ul>
        </div>
        <div className='search'>
          <img src='Vector.png' alt='..'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header;
