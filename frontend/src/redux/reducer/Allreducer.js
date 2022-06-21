import { combineReducers } from "redux";
import {
  ALLcoursesReducer,
  courseDetailsReducer,
  newCourseReducer,
  updatedeletecourseReducer ,
} from "./coursereducer";
import {
  ALLeventsReducer,
  eventDetailsReducer,
  newEventReducer,
  updatedeleteeventReducer ,
} from "./eventreducer";
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
    //courses
    newCourse: newCourseReducer,
    courses: ALLcoursesReducer,
    course:updatedeletecourseReducer ,
    courseDetails: courseDetailsReducer,
    //events
    newEvent: newEventReducer,
    events: ALLeventsReducer,
    event:updatedeleteeventReducer ,
    eventDetails: eventDetailsReducer,
   
  });
  
  export default AllReducer;