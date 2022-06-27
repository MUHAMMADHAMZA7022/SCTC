import React, { Fragment } from 'react';
import './Footer.css';
import logo from '../../../images/sctc_logo.png'

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
          <div className='ft_block bg2'>block2</div>
          <div className='ft_block bg3'>block3</div>
          <div className='ft_block bg4'>block4</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer