import {
  NEW_COURSE_REQUEST ,
  NEW_COURSE_SUCCESS,
  NEW_COURSE_FAIL,
  NEW_COURSE_RESET,
    ADMIN_COURSE_REQUEST,
  ADMIN_COURSE_SUCCESS,
  ADMIN_COURSE_FAIL,
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,

  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_FAIL,
  // PRODUCT_DETAILS_SUCCESS,
 
  // UPDATE_PRODUCT_REQUEST,
  // UPDATE_PRODUCT_SUCCESS,
  // UPDATE_PRODUCT_FAIL,
  // UPDATE_PRODUCT_RESET,
  // DELETE_PRODUCT_REQUEST,
  // DELETE_PRODUCT_SUCCESS,
  // DELETE_PRODUCT_FAIL,
  // DELETE_PRODUCT_RESET,

  CLEAR_ERRORS,
} from "../Constant/courseconstant";

export const productsReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case ALL_COURSE_REQUEST:
    case ADMIN_COURSE_REQUEST:
      return {
        loading: true,
        courses: [],
      };
    case ALL_COURSE_SUCCESS:
      return {
        loading: false,
        courses: action.payload.allcourses,
        coursesCount: action.payload.coursescount,
        resultperpage: action.payload.resultperpage,
        filteredCoursesCount: action.payload.filteredCoursesCount,
      };
    case ADMIN_COURSE_SUCCESS:
      return {
        loading: false,
        course: action.payload,
      };
    case ALL_COURSE_FAIL:
    case ADMIN_COURSE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// export const productDetailsReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case PRODUCT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         product: action.payload,
//       };
//     case PRODUCT_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

export const newCourseReducer = (state = { course: {} }, action) => {
  switch (action.type) {
    case  NEW_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_COURSE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        course: action.payload.course,
      };
    case NEW_COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_COURSE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// export const productReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_PRODUCT_REQUEST:
//     case UPDATE_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };

//     case UPDATE_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isUpdated: action.payload,
//       };
//     case DELETE_PRODUCT_FAIL:
//     case UPDATE_PRODUCT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_PRODUCT_RESET:
//       return {
//         ...state,
//         isDeleted: false,
//       };
//     case UPDATE_PRODUCT_RESET:
//       return {
//         ...state,
//         isUpdated: false,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };
