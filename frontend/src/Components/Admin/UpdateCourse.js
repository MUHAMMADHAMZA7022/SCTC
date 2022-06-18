import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function UpdateCourse() {
    return (
        <Fragment>
            <div className='dashboard_holder courses updateCourse'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    <div className='courseActionHolder'>
                        <div className='actionHolder'>
                            <h1>Update Course</h1>
                            <form className="updateForm">
                                {/* Email */}
                                <div className="group_field">
                                    <label htmlFor="email">
                                        Course ID<span>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder="Course ID"
                                        required
                                    />
                                </div>
                                <div className="group_field">
                                    <button className='btn_primary'>Update Course</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateCourse