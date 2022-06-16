import axios from "axios"
// Register
export const courseregister = (courseData) => async (dispatch) => {
    try {
      console.log(courseData.images);
      dispatch({ type: "courserequest" });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      console.log(courseData.images);
      const { data } = await axios.post(`http://localhost:4000/api/v1/course/createcourse`, courseData, config, 
      
      
      );
  
      dispatch({ type: "registersuccess", payload: data.courses });
    } catch (error) {
      dispatch({
        type: "coursefailure",
        payload: error.response.data.message,
      });
    }
   
  };
  
  export const clear_errors = () => async (dispatch) => {
    dispatch({ type: "clear_errors" });
  };
  
  