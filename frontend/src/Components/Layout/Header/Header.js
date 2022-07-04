import React, { Fragment, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
// import Profile from '../../../images/Profile.png'
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../redux/action/useraction";
import { useAlert } from "react-alert";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../../images/sctc_logo.png';


import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Collapsible from "react-collapsible";


function Header() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const alert = useAlert();
  let history = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  function logoutUser() {
    dispatch(Logout());
    history("/login");

    alert.success("Logout Successfully");

  }
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });


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
        {/* Start of Mobile menu */}
        <div id="mobile_menu">
          <div>
            <div style={{}}>
              <button
                className="mn_open_btn"
                onClick={() => setState({ isPaneOpenLeft: true })}
              >
                <MenuIcon />
              </button>
            </div>
            <SlidingPane
              closeIcon={
                <div>
                  <CloseRoundedIcon />
                </div>
              }
              isOpen={state.isPaneOpenLeft}
              title="SCTC"
              from="left"
              width="300px"
              onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
              <ul className="non_coll mn_menu_list">
                <li>
                  <Link to="/">
                    <HomeIcon />
                      <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/courses">
                    <SchoolIcon />
                      <span>Courses</span>
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    <EventIcon />
                      <span>Events</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <DesignServicesIcon />
                      <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <InfoIcon />
                      <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <ContactPhoneIcon />
                      <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Courses">
                    <form className="search-icon">
                      <ManageSearchIcon />
                      <span>Search Courses</span>
                    </form>
                  </Link>
                </li>
              </ul>
              <Collapsible trigger="Categories" className="accordian_menu">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Biology">Biology</Link>
                  </li>
                </ul>
              </Collapsible>
            </SlidingPane>
          </div>
        </div>
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
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Header