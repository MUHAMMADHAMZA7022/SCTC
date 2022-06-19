import axios from "axios";

import {
  
  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_SUCCESS,
  // PRODUCT_DETAILS_FAIL,
  NEW_COURSE_REQUEST ,
  NEW_COURSE_SUCCESS,
  NEW_COURSE_FAIL,
    ADMIN_COURSE_REQUEST,
  ADMIN_COURSE_SUCCESS,
  ADMIN_COURSE_FAIL,
  ALL_COURSE_FAIL,
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  // UPDATE_PRODUCT_REQUEST,
  // UPDATE_PRODUCT_SUCCESS,
  // UPDATE_PRODUCT_FAIL,
  // DELETE_PRODUCT_REQUEST,
  // DELETE_PRODUCT_SUCCESS,
  // DELETE_PRODUCT_FAIL,
   CLEAR_ERRORS,
} from "../Constant/courseconstant";

//Get All Products
export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], cateogery, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type:   ALL_COURSE_REQUEST, });

      let link = `/api/vasal/allproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      if (cateogery) {
        link = `/api/vasal/allproducts?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&cateogery=${cateogery}&ratings[gte]=${ratings}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type:  ALL_COURSE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:   ALL_COURSE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_COURSE_REQUEST });

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch({
      type:   ADMIN_COURSE_SUCCESS,
      payload: data.prod,
    });
  } catch (error) {
    dispatch({
      type:  ADMIN_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};
// // Get Products Details
// export const getProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST });
//     const { data } = await axios.get(`/api/vasal/oneproduct/${id}`);
//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data.sproduct,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Create Product
export const createCourse = (courseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COURSE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/course/admin/createcourse`,
      courseData,
      config
    );

    dispatch({
      type: NEW_COURSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COURSE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update Product
// export const updateProduct = (id, productData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PRODUCT_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(
//       `/api/vasal/admin/product/${id}`,
//       productData,
//       config
//     );

//     dispatch({
//       type: UPDATE_PRODUCT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Product
// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });

//     const { data } = await axios.delete(`/api/vasal/admin/product/${id}`);

//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_PRODUCT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };


//clear error
export const CLEAR_ERROR = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
