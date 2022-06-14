import React, { Fragment } from 'react'
import "./SignUp.css";

function SignUp() {
    return (
        <Fragment>
            {/* Sign Up Form */}
            <div className='formHolder'>
                <div className='signupHolder'>
                    <h1>Sign Up</h1>
                    <form className="signupForm">
                        {/* Name */}
                        <div className="group_field">
                            <label htmlFor="name">
                                Name<span>*</span>
                            </label>
                            <input
                                type='text'
                                placeholder="Name"
                                required
                            />
                        </div>
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
                    </form>
                </div>
                <div className='signUpImg'></div>
            </div>
        </Fragment>
    )
}

export default SignUp