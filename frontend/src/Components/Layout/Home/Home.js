import React, { Fragment } from 'react'
// import slide1 from '../../../images/bimg1.jpg';
import bg1 from '../../../images/slide-img-1.jpg';
import bg2 from '../../../images/slide-img-2.jpg';
import bg3 from '../../../images/slide-img-3.jpg';
import bg4 from '../../../images/slide-img-4.jpg';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <div className='home_wrapper'>
        <div className='banner'>
          <div className='banner_img'>
            <img src={bg1} alt='slide1' />
          </div>
          <div className='banner_content'>
            <h2>Starting in september 2016?</h2>
            <p>Read our guide to new find out everything you need to know about registering as a student, getting to us, welcome events and setting in.</p>
            <Link to="#" className='btn_primary'>Check Events</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home