<<<<<<< HEAD
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../Layout/Metadata";
// import Loader from "../Layout/Loader/Loader";
import {  useNavigate ,Link} from "react-router-dom";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/action/useraction";
import { useAlert } from "react-alert";

const Profile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

let history=useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  function logoutUser() {

    dispatch(Logout());
    alert.success("Logout Successfully");
  }

  useEffect(() => {
    if (isAuthenticated === false) {
      history("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Fragment>
        <MetaData title={`${user.name}'s Profile`} />

        <div className="section_heading">
          <div className="homeHeading">
            <h2>My Profile</h2>
          </div>
        </div>
        <div className="profileContainer">
      
          <div>
            <div>
              <h4>Full Name</h4>
              <p>{user.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Joined On</h4>
              <p>{String(user.createdAt).substr(0, 10)}</p>
            </div>

            <div>
              <Link className="btn_primary" to="/orders">
                My Orders
              </Link>
              <Link className="btn_primary" to="/password/update">
                Change Password
              </Link>
              <button className="btn_primary" onClick={logoutUser}>
              Logout
            </button>
            </div>
          </div>
        </div>
      </Fragment>
      {/*  )} */}
    </Fragment>
  );
};

export default Profile;
=======
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
>>>>>>> 8f0ff70a95c77f445b592b09b739f3ec8163cc82
