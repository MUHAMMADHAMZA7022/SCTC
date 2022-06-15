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
                    This is UpdateCourse.
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateCourse