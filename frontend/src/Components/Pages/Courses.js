import React, { Fragment } from 'react'
import "./Dashboard.css";

import Sidebar from './Sidebar';
function Courses() {
  return (
    <Fragment>
      <div className='dashboard_holder courses'>
        {/* Sidebar */}
        <div className='dSidebar'>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className='dashboard_content'>
          This is Courses.
        </div>
      </div>
    </Fragment>
  )
}

export default Courses