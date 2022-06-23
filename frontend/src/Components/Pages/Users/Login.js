import "./Login.css";
import React, { Fragment, useState ,useEffect} from "react";
import "./SignUp.css";
import {  useDispatch ,useSelector} from "react-redux";
import {

    CLEAR_ERROR,
  login,
} from "../../../redux/action/useraction";
import { useNavigate } from "react-router-dom";
import{ Link} from "react-router-dom"

import { useAlert } from "react-alert";
function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
    const {success, error, isAuthenticated } = useSelector((state) => state.user);
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR());
    }

    if (isAuthenticated) {
        // alert.success(success);

      history("/profile");
      
    }
  }, [dispatch,success, error, alert, history, isAuthenticated]);
    return (
        <Fragment>
            {/* Login Form */}
            <div className='formHolder'>
                <div className='loginImg'></div>
                <div className='loginHolder'>
                    <h1>Log In</h1>
                    <form className="loginForm" onSubmit={loginSubmit}>
                        {/* Email */}
                        <div className="group_field">
                            <label htmlFor="email">
                                Email<span>*</span>
                            </label>
                            <input
                                type='email'
                                autoComplete="Email"
                                placeholder="Email"
                                name="email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                        </div>
                        {/* Password */}
                        <div className="group_field">
                            <label htmlFor="password">
                                Password<span>*</span>
                            </label>
                            <input
                                type='password'
                                placeholder="Password"
                                autoComplete="current-password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary' >Login</button><br></br><br></br>
                        <Link to={"/signup"}>Go To Register Page</Link>

                        </div>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login