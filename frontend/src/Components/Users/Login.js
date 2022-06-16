import "./Login.css";
import React, { Fragment, useState } from "react";
import "./SignUp.css";
import {  useDispatch } from "react-redux";
import {

  login,
} from "../../redux/action/useraction";
function Login() {
    const dispatch = useDispatch();
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };
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
                                name="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary' >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login