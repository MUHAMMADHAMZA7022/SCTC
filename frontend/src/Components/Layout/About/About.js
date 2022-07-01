import React, { Fragment } from 'react';

import bg3 from '../../../images/slide-img-3.jpg'

function About() {
  return (
    <Fragment>
      <div className="about">
      {/* Single Page Banner */}
      <div className='crs_banner'>
        <div className='crs_bannerImg'>
          <img src={bg3} alt="banner" />
        </div>
        <div className="crsBanner_content">
          <h2>About Us</h2>
        </div>
      </div>
      <div className='about_holder'>
        <div className='about_content grid'>
          <div className='abt_box'>
            <h3>Discover us in Detailed</h3>
            <p>SCTC is a leading research consultancy in medical sciences. We train health researchers and consultants from title selection to final content/ product and publication of the idea.</p>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default About