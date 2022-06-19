import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CLEAR_ERROR,
  getAdminProduct,
} from "../../../redux/action/courseaction";
import AdminCourseCart from "./AdminCoursesCart";
import { useAlert } from "react-alert";
import Sidebar from "./Sidebar";
const Products = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const { course, error } = useSelector((state) => state.courses);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR());
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <div className="dashboard_holder students">
        <div className="dSidebar">
          <Sidebar />
        </div>
        <div className="dashboard_content">
          <h1>All Courses</h1>
          {course ?(
            course.map((courses) => (
              < AdminCourseCart key={courses._id} course={courses} />
            ))
          
          ):(<h1>No Courses</h1>)}
          
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
