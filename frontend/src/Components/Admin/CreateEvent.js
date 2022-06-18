import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function CreateEvent() {
    return (
        <Fragment>
            <div className='dashboard_holder events'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content courses_content'>
                    <h1>Create Event</h1>
                    <form className='courseForm'>
                        <input
                            type="text"
                            placeholder="Event Name"
                            required
                        />
                        <textarea
                            placeholder="Event Description"
                            cols="30"
                            rows="1"
                        ></textarea>
                        <img alt="Avatar Preview" className="imageeee" />
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                        />
                        <input
                            type="number"
                            placeholder="Event Date"
                            required
                        />
                        <button className='btn_primary'>Create Event</button>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default CreateEvent