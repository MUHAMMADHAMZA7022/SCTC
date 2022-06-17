import React, { Fragment } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Fragment>
      <div className='header_holder'>
        <div className='logo_holder'>
          <Link to='/'>SCTC LOGO</Link>
        </div>
        <div className='navbar'>
          <ul className='unstyled nav_list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login' className='nav_btn'>Sign In</Link></li>
          </ul>
        </div>
      </div>      
    </Fragment>
  )
}

export default Header