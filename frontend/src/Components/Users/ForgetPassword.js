import React, { Fragment } from 'react'
import "./ForgetPassword.css";

function ForgetPassword() {
    return (
        <Fragment>
            {/* Forget Form */}
            <div className='forgetformHolder'>
                <div className='forgetHolder'>
                    <h1>Forget Password</h1>
                    <form className="forgetForm">
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
                        <div className="group_field">
                            <button className='btn_primary'>Forget Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default ForgetPassword