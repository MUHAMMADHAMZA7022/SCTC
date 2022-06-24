import "./ForgetPassword.css";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ERROR, forgotPassword} from "../../../redux/action/useraction";
import { useAlert } from "react-alert";
function ForgetPassword() {
    const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERROR());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);

    return (
        <Fragment>
            {/* Forget Form */}
            <div className='forgetformHolder'>
                <div className='forgetHolder'>
                    <h1>Forget Password</h1>
                    <form className="forgetForm" onSubmit={forgotPasswordSubmit}>
                        {/* Email */}
                        <div className="group_field">
                            <label htmlFor="email">
                                Email<span>*</span>
                            </label>
                            <input
                                type='email'
                                placeholder="Email"
                                
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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