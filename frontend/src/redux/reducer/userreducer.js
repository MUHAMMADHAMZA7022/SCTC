import{createReducer} from "@reduxjs/toolkit"

const userreducer=createReducer({},{
  
      registerrequest: (state) => {
        state.loading = true;
      },
      registersuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      },
      registerfailure: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
      loginrequest: (state) => {
        state.loading = true;
      },
      loginsuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      },
      loginfailure: (state, action) => {
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


export default userreducer;