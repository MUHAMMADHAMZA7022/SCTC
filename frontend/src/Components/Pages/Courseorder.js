import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function Courseorder() {
    return (
        <Fragment>
            <div className='dashboard_holder students'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    This is Courses Order.
                </div>
            </div>
        </Fragment>
    )
}

export default Courseorder