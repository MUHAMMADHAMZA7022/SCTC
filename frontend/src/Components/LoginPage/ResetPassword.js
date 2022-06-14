import React, { Fragment } from 'react'
import "./ForgetPassword.css";

function ResetPassword() {
    return (
        <Fragment>
            {/* Reset Form */}
            <div className='forgetformHolder'>
                <div className='forgetHolder'>
                    <h1>Reset Password</h1>
                    <form className="forgetForm">
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
                        {/* Confirm Password */}
                        <div className="group_field">
                            <label htmlFor="password">
                                Confirm Password<span>*</span>
                            </label>
                            <input
                                type='password'
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary'>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default ResetPassword