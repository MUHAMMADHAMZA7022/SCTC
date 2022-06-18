import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function UpdateEvent() {
    return (

        <Fragment>
            <div className='dashboard_holder courses removeCourse'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    {/* <form className='courseForm'>
        <input placeholder='Course ID' type='text' />
        <button className='btn_primary'>Remove Course</button>
    </form> */}

                    <div className='courseActionHolder'>
                        <div className='actionHolder'>
                            <h1>Update Event</h1>
                            <form className="updateForm">
                                {/* Email */}
                                <div className="group_field">
                                    <label htmlFor="email">
                                        Event ID<span>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder="Event ID"
                                        required
                                    />
                                </div>
                                <div className="group_field">
                                    <button className='btn_primary'>Update Event</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateEvent