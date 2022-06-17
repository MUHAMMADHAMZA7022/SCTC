import React, { Fragment } from 'react';
import './Profile.css';

function Profile() {
    return (
        <Fragment>
            <div className='profile_holder'>
                <div className='pForm_holder'>
                    <form className="loginForm">
                        {/* Name */}
                        <div className="group_field">
                            <label htmlFor="text">
                                Email<span>*</span>
                            </label>
                            <input
                                type='text'
                                placeholder="Name"
                                name="name"
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
                                name="email"
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
                                required
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary' >Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile