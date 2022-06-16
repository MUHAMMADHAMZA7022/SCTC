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
                <div className='dashboard_content'>
                    Create Event Here
                </div>
            </div>
        </Fragment>
    )
}

export default CreateEvent