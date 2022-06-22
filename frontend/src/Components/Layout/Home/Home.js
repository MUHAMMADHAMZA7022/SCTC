import React, { Fragment, useEffect } from "react";
// import slide1 from '../../../images/bimg1.jpg';
import bg1 from "../../../images/slide-img-1.jpg";
import bg2 from "../../../images/slide-img-1.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

import CourseCard from "../Course/CourseCard";
import { CLEAR_ERROR, getProduct } from "../../../redux/action/courseaction";
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../Loader/Courseloader";
import { useAlert } from "react-alert";
function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { courses, error } = useSelector((state) => state.courses);
  useEffect(() => {
    if (error) {
      alert.error(error);

      dispatch(CLEAR_ERROR);
    }
    dispatch(getProduct());
  }, [alert, dispatch, error]);

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
            courses.map((course) => (
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
      </div>
    </Fragment>
  );
}

export default Home;
