import React, { Fragment, useState } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
// import Profile from '../../../images/Profile.png'

function Header() {

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

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
            <li className={isActive ? "pr_box" : null}>
              <Link onClick={ToggleClass} to={'#'} className='profile_box'></Link>
              <ul className='unstyled pr_list'>
                <li><Link to={'#'}>Profile</Link></li>
                <li><Link to={'#'}>Dashboard</Link></li>
                <li><Link to={'#'}>Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>      
    </Fragment>
  )
}

export default Header