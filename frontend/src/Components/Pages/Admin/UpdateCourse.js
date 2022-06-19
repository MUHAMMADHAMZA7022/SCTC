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
                <div className='dashboard_content courses_content'>
                    <h1>Create Course</h1>
                    <form className='courseForm'>
                        <input
                            type="text"
                            placeholder="Course Name"
                            required
                        />
                        <input
                            type="text"
                            placeholder="File Url"
                            required
                        />
                        <textarea
                            placeholder="Course Description"
                            cols="30"
                            rows="1"
                        ></textarea>
                        <input
                            type="number"
                            placeholder=" Course Price"
                            required
                        />



                        <img src={'#'} alt="Avatar Preview" className="imageeee" />

                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                        />
                        <input
                            type="text"
                            placeholder="Instructor Name"
                            required
                        />
                        <select className="selectOpt">
                            <option value="">Choose Category</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Select Deadline"
                            required
                        />
                        <button className='btn_primary'>Update</button>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default UpdateCourse