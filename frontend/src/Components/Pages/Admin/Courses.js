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
          <h1>Create Course</h1>
          <form className='courseForm'>
            <input placeholder='Course Name' type='text' />
            <textarea placeholder='Course Description' type='text' />
            <textarea placeholder='Course File Link' type='text' />
            <input placeholder='Course Price' type='number' />
            <input placeholder='Course Images' type='file' />
            <input placeholder=' Course Instructor' type='text' />
            <input placeholder='Course Deadline' type='date' />
            <select placeholder='Course Categorey'className='selectOpt'>
              <option>Course Categorey</option>
              <option>Biostatical</option>
              <option>Physics</option>
              <option>Chemistry</option>
            </select>
            <button className='btn_primary'>Create</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Courses