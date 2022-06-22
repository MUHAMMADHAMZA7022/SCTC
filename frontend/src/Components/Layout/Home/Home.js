import React, { Fragment } from 'react'
// import slide1 from '../../../images/bimg1.jpg';
import bg1 from '../../../images/slide-img-1.jpg';
import bg2 from '../../../images/slide-img-2.jpg';
import bg3 from '../../../images/slide-img-3.jpg';
import bg4 from '../../../images/slide-img-4.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Fragment>
      <div className='home_wrapper'>
        {/* Banner Section */}
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
        {/* Home Courses Section */}
        <section className='homeCourses grid'>
          <div className='section_heading'>
            <h1>Latest Courses to join</h1>
          </div>
          <div className='hc_holder'>
            <div className='hc_card'>
              <div className='hc_img'>
                <img src={bg2} alt='#' />
              </div>
              <div className='hc_content'>
                <h2>Learn Python Programming Masterclass</h2>
                <p>The lorem ipsum dolor sit amet by using the lorem ipsum dolor sit amet.</p>
                <div className='hc_action'>
                  <Link to={"#"} className='red_link'>Join now</Link>
                  <Link to={"#"}>View Details</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='section_btn'>
            <Link to='/courses' className='btn_primary'>View All</Link>
          </div>
        </section>
        {/* Home Events Section */}
        <section className='homeEvents grid'>
          <div className='section_heading'>
            <h1>Upcoming Events</h1>
          </div>
          <div className='ev_holder'>
            <div className='ev_card'>
              <div className='ev_img'>
                <img src={bg3} alt='#' />
              </div>
              <div className='ev_content'>
                <div className='ev_date'>
                  <strong>12</strong>
                  <span className='uppercase'>SEP</span>
                </div>
                <div className='ev_content_holder'>
                  <div className='ev_title'>
                    <Link to={"#"}>
                      <h3>Pure Land: Immortals in Chinese Art.</h3>
                    </Link>
                  </div>
                  <div className='ev_time'>
                    <span>7:30am</span>
                    <span>-</span>
                    <span>11:00am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section_btn'>
            <Link to='/courses' className='btn_primary'>View All</Link>
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Home