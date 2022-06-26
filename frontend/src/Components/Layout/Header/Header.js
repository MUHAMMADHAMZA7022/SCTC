import React, { Fragment, useState} from 'react';
import './Header.css';
import {Link,useNavigate} from 'react-router-dom';
// import Profile from '../../../images/Profile.png'
import { useDispatch,useSelector } from "react-redux";
import { Logout } from "../../../redux/action/useraction";
import { useAlert } from "react-alert";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../../images/sctc_logo.png';

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


  // const [isActive, setActive] = useState("false");
  // const ToggleClass = () => {
  //   setActive(!isActive); 
  //  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Fragment>
      <div className='header_holder'>
        <div className='logo_holder'>
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='navbar'>
          <ul className='unstyled nav_list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li className='cart_icon'><Link to='/cart'><ShoppingCartOutlinedIcon /></Link></li>
            {
              !isAuthenticated ? (
                <li><Link to='/login' className='nav_btn'>Sign In</Link></li>

              ):(
            
            <li className={isHovering ? 'pr_box' : ''}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} id="pr_item">
              {/* className={isActive ? "pr_box" : null} onClick={ToggleClass}  */}
              <Link to={'#'} className='profile_box'></Link>
              <ul className='unstyled pr_list'>
                <li><Link to={'/profile'}>Profile</Link></li>
                 {
                  user.role === "admin" ?( 
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                   ):(
                     null
                  )
                 } 
                <li><button className='logoutBtn' onClick={logoutUser}>Logout</button></li>
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