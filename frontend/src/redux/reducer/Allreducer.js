import { combineReducers } from "redux";
import { newCourseReducer } from "./coursereducer";
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
   
  });
  
  export default AllReducer;