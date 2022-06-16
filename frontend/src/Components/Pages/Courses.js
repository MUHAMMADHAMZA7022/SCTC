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
        <div className='dashboard_content courses_content'>
          <h1>Upload New Course</h1>
          <form className='courseForm'>
            <input placeholder='Course Title' type='text' />
            <input placeholder='Course Price' type='text' /                                                   >
            <input placeholder='Instructor Name' type='text' />
            <input placeholder='Course Deadline' type='date' />
            <input placeholder='Course Image' type='file' />
            <textarea placeholder='Course Description' type='text' />
            <button className='btn_primary'>Upload</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Courses