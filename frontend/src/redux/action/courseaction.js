import axios from "axios";

import {
  
  COURSE_REQUEST,
  COURSE_SUCCESS,
  COURSE_FAIL,
  CLEAR_ERRORS

} from "../Constant/courseconstant";


// Create Product
export const courseregister = (CourseData) => async (dispatch) => {
  try {
    dispatch({ type: COURSE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
  

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/course/createcourse`,
      CourseData,
      config
    );

    dispatch({
      type: COURSE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Register

//clear erro
export const CLEAR_ERROR= () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
