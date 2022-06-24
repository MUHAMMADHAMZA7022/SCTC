import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    return (
        <Fragment>
            <div className='checkout'>
                <h1>Checkout</h1>
                <div className='checkout_holder'>
                    <div className='stdInfo'>
                        <p>Please fill the below form with exact requirements*</p>
                        <form className='stdInfo_form'>
                            <div class="form__group field">
                                <input type="text" className='form__field' placeholder="Name" name="name" id='name' required />
                                <label for="name" className="form__label">Name</label>
                            </div>
                            <div class="form__group field">
                                <input type="email" className='form__field' placeholder="Email" name="email" id='email' required />
                                <label for="email" className="form__label">Email</label>
                            </div>
                            <div class="form__group field">
                                <input type="text" className='form__field' placeholder="University Name" name="uniName" id='uniName' required />
                                <label for="uniName" className="form__label">University Name</label>
                            </div>
                            <div class="form__group field">
                                <input type="text" className='form__field' placeholder="Department" name="department" id='department' required />
                                <label for="department" className="form__label">Department</label>
                            </div>
                            <div class="form__group field lastField">
                                <input type="number" className='form__field' placeholder="Phone No" name="phoneNo" id='phoneNo' required />
                                <label for="phoneNo" className="form__label">Phone No</label>
                            </div>
                            <button className='btn_primary'>Checkout</button>
                        </form>
                    </div>
                    <div className='checkout_summary'>
                        <h1>Summary</h1>
                        <div className='checkout_summary_holder'>
                            <div className='chk_bar'>
                                <span>Total price:</span>
                                <span className='chk_prc'>
                                    <span>$</span>
                                    88
                                </span>
                            </div>
                            <button className='btn_primary'>Complete Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Checkout