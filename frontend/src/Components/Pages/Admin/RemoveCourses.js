import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function RemoveCourses() {
  return (
    <Fragment>
            <div className='dashboard_holder courses removeCourse'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    This is RemoveCourses.
                </div>
            </div>
        </Fragment>
  )
}

export default RemoveCourses