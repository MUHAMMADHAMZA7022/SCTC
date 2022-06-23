import React, { Fragment } from 'react'
import bg3 from '../../../images/slide-img-3.jpg';

import './Cart.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Cart() {
    return (
        <Fragment>
            <div className='Cart'>
                <div className='cart_holder'>
                    <h1>Shopping Cart</h1>
                    <div className='cart_courses'>
                        <div className='cart_crs_img'>
                            <img src={bg3} alt="course-img" />
                        </div>
                        <div className='cart_crs'>
                            <div className='cart_crs_content'>
                                <h2 className='cart_crs_title'>Course Title</h2>
                                <span className='cart_remove_btn'><DeleteForeverIcon /></span>
                                <span className='cart_crs_price'>
                                    <span>$</span>
                                    55
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart_checkout'>
                    <span className='crs_total'>Total:</span>
                    <span className='checkout_price'>
                        <span>$</span>
                        99
                    </span>
                    <button className='btn_primary'>Checkout</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart