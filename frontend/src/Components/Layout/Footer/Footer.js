import React, { Fragment } from 'react';
import './Footer.css';

function Footer() {
  return (
    <Fragment>
      <div className='footer_wrapper'>
        <div className='footer_holder grid'>
          <div className='ft_block bg1'>block1</div>
          <div className='ft_block bg2'>block2</div>
          <div className='ft_block bg3'>block3</div>
          <div className='ft_block bg4'>block4</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer