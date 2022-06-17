import React, { Fragment, useState } from "react";
import "./SignUp.css";
import {  useDispatch } from "react-redux";
import {

  register,
} from "../../redux/action/useraction";
import{ Link} from "react-router-dom"
function SignUp() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });
    const { name, email, password } = user;
    const registerDataChange = (e) => {
      let name, value;
      name = e.target.name; //name get kiya
      value = e.target.value; //value mili user jo likh rha
      setUser({ ...user, [name]: value });
    };
    const registerSubmit = (e) => {
      e.preventDefault();
      let myForm = new FormData();
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("password", password);
      dispatch(register(myForm));
    };
    return (
        <Fragment>
            {/* Sign Up Form */}
            <div className='formHolder'>
                <div className='signupHolder'>
                    <h1>Sign Up</h1>
                    <form className="signupForm" onSubmit={registerSubmit}>
                        {/* Name */}
                        <div className="group_field">
                            <label htmlFor="name">
                                Name<span>*</span>
                            </label>
                            <input
                                type='text'
                                placeholder="Name"
                                required
                                name='name'
                                value={name}
                                onChange={registerDataChange}
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
                                name='email'
                                value={email}
                                onChange={registerDataChange}
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
                                name='password'
                                value={password}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="group_field">
                            <button className='btn_primary' >Sign Up</button>
                        </div>
                        <Link to={"/login"}>Go To Login Page</Link>
                    </form>
                </div>
                <div className='signUpImg'></div>
            </div>
        </Fragment>
    )
}

export default SignUp