import{createReducer} from "@reduxjs/toolkit"

const coursereducer=createReducer({},{
  
      courserequest: (state) => {
        state.loading = true;
      },
     coursesuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.course = action.payload.course;
        state.message = action.payload.message;
      },
      coursefailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
      
      clear_errors: (state) => {
        state.error = null;
      },
  
      clearMessage: (state) => {
        state.message = null;
      },
})


export default coursereducer;