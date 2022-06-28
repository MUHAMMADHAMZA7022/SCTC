import React, { Fragment } from 'react';
import './Footer.css';
import logo from '../../../images/sctc_logo.png'
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';


import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Fragment>
      <div className='footer_wrapper'>
        <div className='footer_holder grid'>
          <div className='ft_block'>
            <div className='footerlogo_holder'>
              <img src={logo} alt="footer logo" />
            </div>
            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,</p>
          </div>
          <div className='ft_block bg2'>
            <div className='ft_title'>
              <h2>Contact Details</h2>
            </div>
            <div className='ft_list'>
              <ul className='unstyled'>
                <li>
                  <span><BusinessIcon /></span>
                  <address>4048 Mutton Town Road</address>
                </li>
                <li>
                  <span><LocalPhoneIcon /></span>
                  <a href="tel:+923209455811">+92 320 9455811</a>
                </li>
                <li>
                  <span><EmailIcon /></span>
                  <a href="email:info@sctc.com.pk">info@sctc.com.pk</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='ft_block'>
            <div className='ft_title'>
              <h2>Social Links</h2>
            </div>
            <div className='ft_list social_links'>
              <ul className='unstyled'>
                <li>
                  <Link to={"#"}>
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <LinkedInIcon />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <WhatsAppIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='ft_block'>
            <div className='ft_title'>
              <h2>Newsletter</h2>
            </div>
            <div className='ft_list newsletter'>
              <form>
                <input placeholder='Name' type={"text"} />
                <input placeholder='Email' type={"email"} />
                <button type='submit'>
                  <span><SendIcon /></span>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer