import { combineReducers } from "redux";
import {
  ALLcoursesReducer,
  courseDetailsReducer,
  // productReducer,
  newCourseReducer,
  updatedeletecourseReducer ,
  // newReviewReducer,
  // productReviewsReducer,
  // reviewReducer,
} from "./coursereducer";
import {
    allUsersReducer,
    userReducer,
    profileReducer,
    forgotPasswordReducer,
    userDetailsReducer,
  } from "./userreducer";
  
const AllReducer = combineReducers({
    userDetails: userDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer, 
    allUsers: allUsersReducer,
    newCourse: newCourseReducer,
    courses: ALLcoursesReducer,
    course:updatedeletecourseReducer ,
    courseDetails: courseDetailsReducer
   
  });
  
  export default AllReducer;