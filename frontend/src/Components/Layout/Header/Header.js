import React, { Fragment, useState} from 'react';
import './Header.css';
import {Link,useNavigate} from 'react-router-dom';
// import Profile from '../../../images/Profile.png'
import { useDispatch,useSelector } from "react-redux";
import { Logout } from "../../../redux/action/useraction";
import { useAlert } from "react-alert";

function Header() {
  const dispatch = useDispatch();
  const alert = useAlert();
let history=useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  function logoutUser() {
    dispatch(Logout());
    history("/login");

    alert.success("Logout Successfully");

  }


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
            {
              !isAuthenticated ? (
                <li><Link to='/login' className='nav_btn'>Sign In</Link></li>

              ):(
            
            <li className={isActive ? "pr_box" : null}>
              <Link onClick={ToggleClass} to={'#'} className='profile_box'></Link>
              <ul className='unstyled pr_list'>
                <li><Link to={'/profile'}>Profile</Link></li>
                 {
                  user.role === "admin" ?( 
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                   ):(
                     null
                  )
                 } 
                <li><button  onClick={logoutUser}>Logout</button></li>
              </ul>
            </li>
              )}
          </ul>
        </div>
      </div>      
    </Fragment>
  )
}

export default Header