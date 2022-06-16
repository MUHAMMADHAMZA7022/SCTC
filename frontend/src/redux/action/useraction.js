import axios from "axios"
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: " loginrequest" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `http://localhost:4000/api/v1/login`,
      { email, password },
      config
    );
    dispatch({ type: "loginsuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: " loginfailure", payload: error.response.data.message });
  }
};
// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "registerrequest" });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`
      http://localhost:4000/api/v1/user/register
      `, userData, config);
  
      dispatch({ type: "registersuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "registerfailure",
        payload: error.response.data.message,
      });
    }
   
  };
  
  export const clear_errors = () => async (dispatch) => {
    dispatch({ type: "clear_errors" });
  };
  
  