import React, { Fragment } from 'react'
import "./Login.css";

function Login() {
    return (
        <Fragment>
            {/* Login Form */}
            <div className='formHolder'>
                <div className='loginImg'></div>
                <div className='loginHolder'>
                    <h1>Log In</h1>
                    <form className="loginForm">
                        {/* Email */}
                        <div className="group_field">
                            <label htmlFor="email">
                                Email<span>*</span>
                            </label>
                            <input
                                type='email'
                                placeholder="Email"
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
                                required
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login