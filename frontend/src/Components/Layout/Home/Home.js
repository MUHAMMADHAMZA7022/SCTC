import React, { Fragment, useEffect } from "react";
// import slide1 from '../../../images/bimg1.jpg';
import bg1 from '../../../images/slide-img-1.jpg';
// import bg2 from '../../../images/slide-img-2.jpg';
// import bg3 from '../../../images/slide-img-3.jpg';
// import bg4 from '../../../images/slide-img-4.jpg';

import "./Home.css";
import { Link } from "react-router-dom";

import CourseCard from "../Course/CourseCard";
import EventCard from "../Event/EventCard";
import { CLEAR_ERROR, getProduct } from "../../../redux/action/courseaction";
import { CLEAR_ERROR_EVENT, getEvent } from "../../../redux/action/eventaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../Loader/Courseloader";
import { useAlert } from "react-alert";
function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { courses, error } = useSelector((state) => state.courses);
  const { events, error: eventerror } = useSelector((state) => state.events);
  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_ERROR);
    }
    if (eventerror) {
      alert.error(eventerror);

      dispatch(CLEAR_ERROR_EVENT);
    }
    dispatch(getEvent());
    dispatch(getProduct());
  }, [alert, dispatch, error, eventerror]);

  return (
    <Fragment>
      <div className="home_wrapper">
        {/* Banner Section */}
        <div className="banner">
          <div className="banner_img">
            <img src={bg1} alt="slide1" />
          </div>
          <div className="banner_content">
            <h2>Starting in september 2016?</h2>
            <p>
              Read our guide to new find out everything you need to know about
              registering as a student, getting to us, welcome events and
              setting in.
            </p>
            <Link to="#" className="btn_primary">
              Check Events
            </Link>
          </div>
        </div>
        <section className="homeCourses grid">
          <div className="section_heading">
            <h1>Latest Courses to join</h1>
          </div>

          {courses ? (
            courses
              .map((course) => (
                <CourseCard key={course._id} course={course} />
              ))
          ) : (
            <Loader1 />
          )}

          {/* <div className='hc_holder'>
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
          </div> */}

          <div className="section_btn">
            <Link to="/courses" className="btn_primary">
              View All
            </Link>
          </div>
        </section>
        {/* Home Events Section */}
        <section className='homeEvents grid'>
          <div className='section_heading'>
            <h1>Upcoming Events</h1>
          </div>
          {events ? (
            events
              .slice(0, 3)
              .map((event) => (
                <EventCard key={event._id} event={event} />
              ))
          ) : (
            <Loader1 />
          )}
          {/* <div className='ev_holder'>
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
          </div> */}
          <div className='section_btn'>
            <Link to='/courses' className='btn_primary'>View All</Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
