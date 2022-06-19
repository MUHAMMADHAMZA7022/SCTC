import "./Dashboard.css";
import { Link } from "react-router-dom";
import React, { Fragment, } from "react";
function AllCourses({ course }) {
  return (
    <Fragment>
      <div className="courses_holder">
        <div className="course_card">
          <div className="cr_img">
            <img src={course.images.url} alt="course_image" />
          </div>
          <div className="crs_content">
            <div className="crs_title">
              <h2>{course.name}</h2>
            </div>
            <div className="crs_desp">
              <p>{course.description} </p>
            </div>
            <div className="crs_action">
              <Link className="btn_primary" to="/removecourse">
                Delete
              </Link>
              <Link className="btn_primary" to="/updatecourse">
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AllCourses;
