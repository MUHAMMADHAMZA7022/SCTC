import React, { Fragment } from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar';

function Events() {
    return (
        <Fragment>
            <div className='dashboard_holder events'>
                {/* Sidebar */}
                <div className='dSidebar'>
                    <Sidebar />
                </div>
                {/* Main Content */}
                <div className='dashboard_content'>
                    This is Events.
                </div>
            </div>
        </Fragment>
    )
}

export default Events